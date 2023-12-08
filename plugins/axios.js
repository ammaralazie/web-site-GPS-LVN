export default function({ $axios }) {
  $axios.setToken(
    `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzAxNjg2NzkwLCJleHAiOjE3MDQyNzg3OTAsIm5iZiI6MTcwMTY4Njc5MCwianRpIjoiQ2tTd1ptOWZ1eG53RFpmbiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.OkmO2IMPTMKhiBphZM_fyICm-tn_7EMuCMPlgj5CKsM`,
    'Bearer',
    ['get']
  )

  $axios.setBaseURL('http://127.0.0.1:8000')
}
