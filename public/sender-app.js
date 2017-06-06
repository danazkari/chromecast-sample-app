"use strict";

const APP_ID = 'A1042A86';

window['__onGCastApiAvailable'] = function __onGCastApiAvailable(isAvailable) {
    console.log(isAvailable);
    cast.framework.CastContext.getInstance()
        .setOptions({
            receiverApplicationId: APP_ID
        });
    const castSession = cast.framework.CastContext.getInstance().getCurrentSession();
};
