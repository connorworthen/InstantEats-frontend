export const refreshTokenFacebook = (fields) => {
  return () => {
    let refreshTiming = (fields.tokenObj.expires_in || 3600 - 5 * 60) * 1000

    const refreshToken = async () => {
      const newAuthRes = await fields.reloadAuthResponse()
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000
      
      setTimeout(refreshToken, refreshTiming)
    }
    setTimeout(refreshToken, refreshTiming)
  }
}

export default refreshTokenFacebook