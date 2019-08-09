import { ActionTicket } from "./Action";
import * as LangRes from "../resources/strings";
import { setPlayerData } from "./Storage";
import { PlayerObject } from "../model/PlayerObject";
import { superAdminLogin } from "./SuperAdmin";
import * as Ban from "../controller/Ban";
import {
    gameRule
} from "../model/rules/captain.rule";

export class Parser {
    // written in Singleton Pattern
    // If the bot created Parser object once, never create ever until the bot instance dead. 
    private static instance: Parser = new Parser();

    private Parser() { } // not use
    public static getInstance(): Parser {
        if (this.instance == null) {
            this.instance = new Parser();
        }
        return this.instance;
    }
    

    public eval(message: string, playerID: number): ActionTicket {
        // evaluate given string
        // if given string is command chat, this function returns true, nor false.
        var ticket: ActionTicket = { type: "none", ownerPlayerID: playerID, messageString: message };
        if(this.isCommandString(message) == true) {
            // if given string is command chat
            let cutMsg: string[] = message.split(" ", 3); // divide into 3 parts by sperator. !COMMAND FIRST-ARG SECOND-ARG
            let cmd: string = cutMsg[0].substr(1, cutMsg[0].length); // remove first character of COMMAND part(it maybe '!')

            switch(cmd) {
                case "help": {
                    if(cutMsg[1] !== undefined) {
                        switch(cutMsg[1]) {
                            case "admin": {
                                ticket.messageString = LangRes.command.helpadmin;
                                break
                            }
                            case "help": {
                                ticket.messageString = LangRes.command.helpman.help;
                                break;
                            }
                            case "about": {
                                ticket.messageString = LangRes.command.helpman.about;
                                break;
                            }
                            case "streak": {
                                ticket.messageString = LangRes.command.helpman.streak;
                                break;
                            }
                            case "stats": {
                                ticket.messageString = LangRes.command.helpman.stats;
                                break;
                            }
                            case "statsreset": {
                                ticket.messageString = LangRes.command.helpman.statsreset;
                                break;
                            }
                            case "poss": {
                                ticket.messageString = LangRes.command.helpman.poss;
                                break;
                            }
                            case "afk": {
                                ticket.messageString = LangRes.command.helpman.afk;
                                break;
                            }
                            case "list": {
                                ticket.messageString = LangRes.command.helpman.list;
                                break;
                            }
                            case "freeze": {
                                ticket.messageString = LangRes.command.helpman.freeze;
                                break;
                            }
                            case "mute": {
                                ticket.messageString = LangRes.command.helpman.mute;
                                break;
                            }
                            case "auto": {
                                ticket.messageString = LangRes.command.helpman.auto;
                                break;
                            }
                            case "rand": {
                                ticket.messageString = LangRes.command.helpman.rand;
                                break;
                            }
                            case "scout": {
                                ticket.messageString = LangRes.command.helpman.scout;
                                break;
                            }
                            default: {
                                ticket.messageString = LangRes.command.helpman._ErrorWrongMan;
                                break;
                            }
                        }
                    } else {
                        ticket.messageString = LangRes.command.help;
                    }
                    ticket.type = "info";
                    ticket.targetPlayerID = playerID;
                    ticket.selfnotify = true;
                    break;
                }
                case "about": {
                    ticket.type = "info";
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command.about;
                    ticket.selfnotify = true;
                    break;
                }
                case "list": {
                    ticket.type = "whois";
                    ticket.targetPlayerID = playerID;
                    ticket.selfnotify = true;
                    ticket.action = function(playerID: number, playerList: any, gameRoom: any): string {
                        if(cutMsg[1] !== undefined) {
                            ticket.messageString = LangRes.command.list.whoisList;
                            switch(cutMsg[1]) {
                                case "red": {
                                    let msg: string = '';
                                    var players = gameRoom.getPlayerList().filter((player: PlayerObject) => player.id != 0 && player.team == 1);
                                    if(players.length == 0) {
                                        ticket.messageString = LangRes.command.list._ErrorNoOne;
                                    } else {
                                        players.forEach((player: PlayerObject) => {
                                            let muteFlag: string = '';
                                            if(playerList.get(player.id).permissions.mute == true) {
                                                muteFlag = '🔇';
                                            }
                                            msg += player.name + '#' + player.id + muteFlag + ' / ';
                                        });
                                        return msg;
                                    }
                                    break;
                                }
                                case "blue": {
                                    let msg: string = '';
                                    var players = gameRoom.getPlayerList().filter((player: PlayerObject) => player.id != 0 && player.team == 2);
                                    if(players.length == 0) {
                                        ticket.messageString = LangRes.command.list._ErrorNoOne;
                                    } else {
                                        players.forEach((player: PlayerObject) => {
                                            let muteFlag: string = '';
                                            if(playerList.get(player.id).permissions.mute == true) {
                                                muteFlag = '🔇';
                                            }
                                            msg += player.name + '#' + player.id + muteFlag + ' / ';
                                        });
                                        return msg;
                                    }
                                    break;
                                }
                                case "spec": {
                                    let msg: string = '';
                                    var players = gameRoom.getPlayerList().filter((player: PlayerObject) => player.id != 0 && player.team == 0);
                                    if(players.length == 0) {
                                        ticket.messageString = LangRes.command.list._ErrorNoOne;
                                    } else {
                                        players.forEach((player: PlayerObject) => {
                                            let muteFlag: string = '';
                                            if(playerList.get(player.id).permissions.mute == true) {
                                                muteFlag = '🔇';
                                            }
                                            msg += player.name + '#' + player.id + muteFlag + ' / ';
                                        });
                                        return msg;
                                    }
                                    break;
                                }
                                default: {
                                    ticket.messageString = LangRes.command.list._ErrorNoTeam;
                                    break;
                                }
                            }
                        } else {
                            ticket.messageString = LangRes.command.list._ErrorNoTeam;
                        }
                        return '';
                    }
                    break;
                }
                case "poss": {
                    ticket.type = "stats";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command.poss;
                    ticket.selfnotify = true;
                    break;
                }
                case "streak": {
                    ticket.type = "stats";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command.streak;
                    ticket.selfnotify = true;
                    break;
                }
                case "stats": {
                    ticket.type = "stats";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command.stats.firstLine + '\n' + LangRes.command.stats.secondLine;
                    ticket.selfnotify = false;
                    break;
                }
                case "statsreset": {
                    ticket.type = "stats";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command.statsreset;
                    ticket.selfnotify = true;
                    ticket.action = function(playerID: number, playerList: any, statsMode: boolean): void {
                        playerList.get(playerID).stats.totals = 0;
                        playerList.get(playerID).stats.wins = 0;
                        playerList.get(playerID).stats.goals = 0;
                        playerList.get(playerID).stats.assists = 0;
                        playerList.get(playerID).stats.ogs = 0;
                        playerList.get(playerID).stats.losePoints = 0;
                        playerList.get(playerID).stats.balltouch = 0;
                        playerList.get(playerID).stats.passed = 0;
                        setPlayerData(playerList.get(playerID));
                    }
                    break;
                }
                /*
                case "auto": {
                    ticket.type = "captain";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command.auto._ErrorNoPermission;
                    ticket.selfnotify = false;
                    ticket.action = function(playerID: number, playerList: any, gameRoom: any): void {
                        let players = {
                            red: gameRoom.getPlayerList().filter((player: PlayerObject) => player.team == 1),
                            blue: gameRoom.getPlayerList().filter((player: PlayerObject) => player.team == 2),
                            spec: gameRoom.getPlayerList().filter((player: PlayerObject) => player.team == 0 && playerList.get(player.id).permissions.afkmode != true)
                        }
                        if(playerID == players.red[0]) {
                            ticket.messageString = LangRes.command.auto._ErrorNoOrder;
                            if(players.red.length < gameRule.requisite.eachTeamLimit) {
                                
                            }
                        }
                        if(playerID == players.blue[0]) {
                            ticket.messageString = LangRes.command.auto._ErrorNoOrder;
                        }
                    }
                    break;
                }
                */
                case "afk": {
                    ticket.type = "status";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command.afk.setAfk;
                    ticket.selfnotify = false;
                    ticket.action = function(playerID: number, playerList: any, gameRoom: any): void {
                        if(playerList.get(playerID).permissions.afkmode == true) { // if already in afk mode
                            playerList.get(playerID).permissions.afkmode = false; // return to active mode
                            playerList.get(playerID).permissions.afkreason = ''; // init
                            playerList.get(playerID).afktrace = { exemption: false, count: 0}; // reset for afk trace
                            ticket.messageString = LangRes.command.afk.unAfk;
                        } else { // when not in afk mode
                            gameRoom.setPlayerTeam(playerID, 0); // Moves this player to Spectators team.
                            gameRoom.setPlayerAdmin(playerID, false); // disqulify admin permission
                            playerList.get(playerID).admin = false;
                            playerList.get(playerID).permissions.afkmode = true; // set afk mode
                            playerList.get(playerID).afktrace = { exemption: false, count: 0}; // reset for afk trace
                            if(cutMsg[1] !== undefined) { // if the reason is not skipped
                                playerList.get(playerID).permissions.afkreason = cutMsg[1]; // set reason
                            }
                        }
                    }
                    break;
                }
                case "freeze": {
                    ticket.type = "freeze";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.selfnotify = false;
                    ticket.action = function(playerID: number, playerList: any, muteMode: boolean): boolean|null {
                        if(playerList.get(playerID).admin == true) { // if admin
                            if(muteMode == true) { // if already on
                                ticket.messageString = LangRes.command.freeze.offFreeze;
                                return false; // off
                            } else { // if already off
                                ticket.messageString = LangRes.command.freeze.onFreeze;
                                return true; // on
                            }
                        } else { // if not admin
                            ticket.selfnotify = true;
                            ticket.messageString = LangRes.command.freeze._ErrorNoPermission;
                            return null;
                        }
                    }
                    break;
                }
                case "mute": {
                    ticket.type = "freeze";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command.mute._ErrorNoPlayer;
                    ticket.selfnotify = true;
                    ticket.action = function(playerID: number, playerList: any, muteMode: boolean): boolean|null {
                        if(playerList.get(playerID).admin == true) {
                            if(cutMsg[1] !== undefined && cutMsg[1].charAt(0) == "#") {
                                let target: number = parseInt(cutMsg[1].substr(1), 10);
                                if(isNaN(target) != true && playerList.has(target) == true) { // if the value is not NaN and there's the player
                                    ticket.selfnotify = false;
                                    ticket.targetPlayerID = target;
                                    if(playerList.get(target).permissions.mute == true) {
                                        ticket.messageString = LangRes.command.mute.successUnmute;
                                        playerList.get(target).permissions.mute = false;
                                    } else {
                                        ticket.messageString = LangRes.command.mute.successMute;
                                        playerList.get(target).permissions.mute = true;
                                    }
                                }
                            }
                        } else {
                            ticket.messageString = LangRes.command.mute._ErrorNoPermission;
                        }
                        return null; // always return null
                    }
                    break;
                }
                
                case "super": {
                    ticket.type = "super";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command.super.defaultMessage;
                    ticket.selfnotify = true;
                    ticket.action = function(playerID: number, playerList: any, gameRoom: any): void {
                        if(cutMsg[1] !== undefined) {
                            switch(cutMsg[1]) {
                                case "login": {
                                    if(playerList.get(playerID).permissions.superadmin != true) { // only when not yet loginned
                                        if(cutMsg[2] !== undefined) {
                                            // key check and login
                                            if(superAdminLogin(cutMsg[2]) == true) { // if login key is matched
                                                playerList.get(playerID).permissions.superadmin = true; // set super admin
                                                //setPlayerData(playerList.get(playerID)); // update
                                                ticket.messageString = LangRes.command.super.loginSuccess;
                                            } else {
                                                ticket.messageString = LangRes.command.super.loginFail;
                                            }
                                        } else {
                                            ticket.messageString = LangRes.command.super.loginFailNoKey;
                                        }
                                    } else { // if already loginned
                                        ticket.messageString = LangRes.command.super._ErrorLoginAlready;
                                    }
                                    break;
                                }
                                case "logout": {
                                    if(playerList.get(playerID).permissions.superadmin == true) { // only when loginned
                                        playerList.get(playerID).permissions.superadmin = false; // disqualify super admin
                                        //setPlayerData(playerList.get(playerID)); // update
                                        ticket.messageString = LangRes.command.super.logoutSuccess;
                                    } else {
                                        ticket.messageString = LangRes.command.super._ErrorNoPermission;
                                    }
                                    break;
                                }
                                case "thor": {
                                    if(playerList.get(playerID).permissions.superadmin == true) {
                                        // Get all admin players except the bot host
                                        gameRoom.setPlayerAdmin(playerID, true); // first, give admin
                                        playerList.get(playerID).admin = true;
                                        if(cutMsg[2] !== undefined && cutMsg[2] == 'deprive') { // get admin list except this super admin 
                                            var players = gameRoom.getPlayerList().filter((player: PlayerObject) => player.id != 0 && player.id != playerID && player.admin == true);
                                            if (players.length == 0) { // If no players left, do nothing.
                                                ticket.messageString = LangRes.command.super.thor.noAdmins;
                                                return;
                                            } else {
                                                ticket.messageString = LangRes.command.super.thor.deprive;
                                                players.forEach((player: PlayerObject) => { // disqualify admin permission
                                                    gameRoom.setPlayerAdmin(player.id, false);
                                                    playerList.get(player.id).admin = false;
                                                });
                                            }
                                        } else {
                                            ticket.messageString = LangRes.command.super.thor.complete;
                                        }
                                    } else {
                                        ticket.messageString = LangRes.command.super._ErrorNoPermission;
                                    }
                                    break;
                                }
                                case "kick": {
                                    if(playerList.get(playerID).permissions.superadmin == true) {
                                        if(cutMsg[2] !== undefined) {
                                            if(playerList.get(playerID) !== null) {
                                                gameRoom.kickPlayer(parseInt(cutMsg[2], 10), LangRes.command.super.kick.kickMsg, false); // kick
                                                ticket.messageString = LangRes.command.super.kick.kickSuccess;
                                            } else {
                                                ticket.messageString = LangRes.command.super.kick.noID;
                                            }
                                        } else {
                                            ticket.messageString = LangRes.command.super.kick.noID;
                                        }
                                    } else {
                                        ticket.messageString = LangRes.command.super._ErrorNoPermission;
                                    }
                                    break;
                                }
                                case "banclear": {
                                    if(playerList.get(playerID).permissions.superadmin == true) {
                                        if(cutMsg[2] !== undefined) {
                                            if(cutMsg[2] == 'all') {
                                                gameRoom.clearBans();
                                                Ban.bListClear();
                                                ticket.messageString = LangRes.command.super.banclear.complete;
                                            }
                                            
                                        }
                                    } else {
                                        ticket.messageString = LangRes.command.super._ErrorNoPermission;
                                    }
                                    break;
                                }
                                default: {
                                    ticket.messageString = LangRes.command.super._ErrorWrongCommand;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                }
                case "scout": {
                    ticket.type = "stats";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command.scout._ErrorNoMode;
                    ticket.selfnotify = true;
                    ticket.action = function(playerID: number, playerList: any, statsMode: boolean): void {
                        if(statsMode == true) {
                            ticket.messageString = LangRes.command.scout.scouting;
                        }
                    }
                    break;
                }
                default: {
                    ticket.type = "_ErrorWrongCommand";
                    ticket.ownerPlayerID = playerID;
                    ticket.targetPlayerID = playerID;
                    ticket.messageString = LangRes.command._ErrorWrongCommand;
                    ticket.selfnotify = true;
                    break;
                }
            }
        }
        return ticket;
    }

    private isCommandString(message: string): boolean {
        if(message.charAt(0) == "!") {
            // If message has '!' as first character in it's string, return true.
            return true;
        } else {
            return false;
        }
    }

    public maketext(str: string, placeholder: any): string {
        // find placeholer, and interpolate it.
        // if property not found string is not replaced
        // from https://stackoverflow.com/questions/19896511/how-to-replace-specific-parts-in-string-with-javascript-with-values-from-object
        return String(str).replace((/\\?\{([^{}]+)\}/g), function(match, name) {
            return (placeholder[name] != null) ? placeholder[name] : match;
        });
        /* usage
        var content ="Looks like you have {no_email} or {no_code} provided";
        var Lang = {
            'no_email' : "No email",
            'no_code' : "No code"
        }
        var formatted = replace(content, lang);
        */
    }
}

/*
USAGE EXAMPLE

let something: Parser = new Parser(); // It makes an error: constructor of 'Singleton' is private.
let instance: Parser = Parser.getInstance(); instace.blahbalh(); // now do something with the instance.

*/