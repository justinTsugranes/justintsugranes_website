// import { useFetchData } from '../hooks'

const Quote = () => {
  // const { data, error } = useFetchData(`*[_type == "about"]`)

  // if (error) {
  //   return <p>{error.message}</p>
  // }

  return (
    <div className="row d-flex justify-content-center my-5 py-5">
      <div className="card quote-card w-75 bg-dark bg-gradient text-white rounded-3 border-0 m-5 shadow">
        <div className="mx-auto">
          <blockquote className="p-4">
            {/* <p className='text-shadow text-white text-center p-4 lh-lg fs-2'>{data[0]?.quote}</p> */}
            <p className="text-shadow text-white text-center p-4 lh-lg fs-2">
              I believe the best designs are driven by user-centered,
              equity-focused principles that ensure any user from any nation can
              interact with your product from any device and any internet
              connection
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default Quote
