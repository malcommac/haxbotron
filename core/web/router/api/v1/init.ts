import { Context, Next } from "koa";
import Router from "koa-router";
import Joi from 'joi';
import { isNeedInstallation, makeHashedPassword, saveAdminAccount } from "../../../model/account";
import { generateToken } from "../../../lib/jwt.middleware";

export const initRouter = new Router();

const validationSchema = Joi.object().keys({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),
    password: Joi.string().required()
});

// check need for init
initRouter.get('/', async (ctx: Context, next: Next) => {
    if (await isNeedInstallation()) { // need for init
        ctx.status = 404; // return failure code
    } else { // already done
        ctx.status = 204; // return success code
    }
});

// do init
initRouter.post('/', async (ctx: Context, next: Next) => {
    if (await isNeedInstallation()) { // register new one
        // validation
        const validationResult = validationSchema.validate(ctx.request.body);

        if(validationResult.error) {
            ctx.status = 400;
            ctx.body = validationResult.error;
            return;
        }

        // register new admin account
        const { username, password } = ctx.request.body;
        const token = generateToken(username);

        await saveAdminAccount({ accountName: username, hashedPassword: await makeHashedPassword(password)});

        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            httpOnly: true,
        });
        ctx.status = 201;
    } else { // already done
        ctx.status = 405;
    }
});
