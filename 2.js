function minimumWaitingTime(queries) {
    queries.sort();

    let res=0;
    let prev=0;
    for(let i=0; i<queries.length-1; i++) {
        prev+=queries[i];
        res+=prev;
    }
    return res;
}

exports.minimumWaitingTime = minimumWaitingTime;
