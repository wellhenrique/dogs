export const ApiDogs = 'https://dogsapi.origamid.dev/json'

export function TokenAuthUser(body: any) {
  return {
    url: ApiDogs + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  }
}

export function GetUserByToken(token: string) {
  return {
    url: ApiDogs + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}