import axios from 'axios';
import {
  FETCH_RANKING_REQUEST,
  FETCH_RANKING_SUCCESS,
  FETCH_RANKING_FAILURE,
  FETCH_INDIVIDUAL_STATS_REQUEST,
  FETCH_INDIVIDUAL_STATS_SUCCESS,
  FETCH_INDIVIDUAL_STATS_FAILURE,
} from '../constants/UserStatConstants'


const fetchRankingRequest = () => {
  return {
    type: FETCH_RANKING_REQUEST
  }
}

const fetchRankingSucess = ranking => {
    return {
        type: FETCH_RANKING_SUCCESS,
        payload: ranking
    }
}

const fetchRankingFailure = error => {
    return {
        type: FETCH_RANKING_FAILURE,
        payload: error
    }
}

export const fetchRanking = () => {
  return function(dispatch, getState) {
      dispatch(fetchRankingRequest())

      axios.get('http://localhost:55555/userstats/ranking?number=20', 
      {headers:{ Authorization: "Basic " + localStorage.getItem("token")}})
        .then( res =>{
          dispatch(fetchRankingSucess(res.data))
        })
        .catch(error => {
          dispatch(fetchRankingFailure(error.message))
        })
  }
}

  const fetchIndividualStatsRequest = () => {
    return {
      type: FETCH_INDIVIDUAL_STATS_REQUEST
    }
  }

  const fetchIndividualStatsSucess = individual_stats => {
      return {
          type: FETCH_INDIVIDUAL_STATS_SUCCESS,
          payload: individual_stats
      }
  }

  const fetchIndividualStatsFailure = error => {
      return {
          type: FETCH_INDIVIDUAL_STATS_FAILURE,
          payload: error
      }
  }


  export const fetchIndividualUserStats = () => {
    return function(dispatch, getState){
      dispatch(fetchIndividualStatsRequest())
      let userid = getState().user.currentUser.id;
      axios.get('http://localhost:55555/userstats?id='+userid,
      {headers:{ Authorization: "Basic " + localStorage.getItem("token")}})
        .then( res =>{
          dispatch(fetchIndividualStatsSucess(res.data))
        })
        .catch(error => {
          dispatch(fetchIndividualStatsFailure(error.message))
        })
    }
  }
