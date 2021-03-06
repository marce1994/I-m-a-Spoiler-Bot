"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const markup = require('telegraf').Markup;
exports.spoilerKeyboard = ({ id, translate, toHide = false }) => {
    return markup.inlineKeyboard([
        markup.callbackButton(translate.t('spoilerButton'), `${id.toString()}/${toHide}`)
    ]);
};
