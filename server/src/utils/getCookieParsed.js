const getCookieParsed = cookieString => {
    if (!cookieString || cookieString === "")
        return {};

    let pairs = cookieString.split(";");

    let splittedPairs = pairs.map(cookie => cookie.split("="));

    const cookieObj = splittedPairs.reduce(function (obj, cookie) {

        obj[decodeURIComponent(cookie[0].trim())]
            = decodeURIComponent(cookie[1].trim());

        return obj;
    }, {})

    return cookieObj;
}

module.exports = getCookieParsed;