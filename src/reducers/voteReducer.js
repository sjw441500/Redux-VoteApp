export const voteReducer = (state =[
{id:1,thumbUp: 2 ,thumbDown:1,link:"stackoverflow",description:"web 1",address:"http://www.stackoverflow.com"},
{id:2,thumbUp: 222 ,thumbDown:15,link:"github",description:"web 2",address:"http://www.github.com"} ],
action) =>{
    switch(action.type) {
        case 'VOTE_UP':{
            return (
                state.map(vote =>{
                    if(vote.id !== action.id)
                    return vote;
                    else{
                        return {
                            ...vote,
                            thumbUp:vote.thumbUp+1,
                        }
                    }
                })
            )      
        }
        case 'VOTE_DOWN':{
            return  (
                state.map(vote =>{
                    if(vote.id !== action.id)
                    return vote;
                    else{
                        return {
                            ...vote,
                            thumbDown:vote.thumbDown+1,
                        }
                    }
                })
            )

        }

        case 'ADD_VOTE':{
            return(
                [...state,
                    { 
                        thumbDown:0,
                        thumbUp:0,
                        id: action.id,
                        link: action.link,
                        description: action.description,
                        address:action.address
                            }]
            )
            

        }

        default:

        return state;
    }
}


export default voteReducer;

