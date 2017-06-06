"use strict";

const APP_ID = 'A1042A86';

window['__onGCastApiAvailable'] = function __onGCastApiAvailable(isAvailable) {
    cast.framework.CastContext.getInstance()
        .setOptions({
            receiverApplicationId: APP_ID
        });
};
