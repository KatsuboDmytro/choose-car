import { InfinitySpin } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div className="loader">
      <InfinitySpin
        width='200'
        color="#000"
      />
    </div>
  )
}
