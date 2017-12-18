const BASE_URI = 'https://glacial-fjord-46366.herokuapp.com'

export type SlackServerResponse = {
  text: String;
}

// For now this calls the existing Slack endpoint, but we ideally
// need new endpoints that accept json messages.
export const sendInput: (id: string, input: string) => Promise<SlackServerResponse> =
    (id: string, input: string) => {
      return fetch(BASE_URI + '/move', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'user_id=' + id + '&text=' + input
      }).then((response: any) => {
        console.log('Response', response)
        return response.json()
      }).catch(err => console.log('Unexpected error', err))
    }

export const createGame: (id: string) => Promise<SlackServerResponse> = (id: string) => {
  return fetch(BASE_URI + '/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'user_id=' + id
  }).then((response: any) => {
    console.log('Response', response)
    return response.json()
  }).catch(err => console.log('Unexpected error', err))
}
