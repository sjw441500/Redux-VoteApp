
let nextVoteId = 3;
export const addVote =(link,address,description) =>({
type: "ADD_VOTE",
id:nextVoteId++,
address,
link,
description,
})

export const voteUp =id =>({

    type:"VOTE_UP",
    id,

})

export const voteDown = id =>({
    type:"VOTE_DOWN",
    id,
})
