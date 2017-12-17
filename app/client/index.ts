const BASE_URI = 'https://glacial-fjord-46366.herokuapp.com'

type SlackServerResponse = {
  text: String;
}

// For now this calls the existing Slack endpoint, but we ideally
// need new endpoints that accept json messages.
export const createGame: (id: string) => Promise<SlackServerResponse> = (id: string) => {
  let formData = new FormData()
  formData.append('user_id', id)

  return fetch(BASE_URI + '/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'user_id=' + id
  }).then((response: any) => {
    return response.json()
  })
    .then((respJson) => {
      return respJson
    }).catch(err => console.log('Error', err))
}
