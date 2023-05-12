import { createImage } from 'api/image/requests'
import { useState } from 'react'

export const ImageForm = () => {
  const [imageURL, setImageURL] = useState('')
  const [alt, setAlt] = useState('')
  const [altLoading, setAltLoading] = useState(false)
  const [altProposition, setAltProposition] = useState('')

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    createImage({ url: imageURL, alt })
  }

  const onChangeUrl = (url: string) => {
    setImageURL(url)
    setAltLoading(true)
    // @ts-ignore
    asticaVision(
      '1.0_full', //modelVersion: 1.0_full, 2.0_full
      url, //Input Image
      'Description', //or 'all'
      your_astica_CallBack //Your Custom Callback function
    )

    function your_astica_CallBack(data: any) {
      if (typeof data.error != 'undefined') alert(data.error)
      console.log(data) //view all data
      setAltLoading(false)

      setAltProposition(data.caption.text)
    }
  }
  const acceptProposition = () => {
    setAlt(altProposition)
  }
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <div className="sm:col-span-4">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Image URL
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  onChange={({ target }) => {
                    onChangeUrl(target.value)
                  }}
                  value={imageURL}
                />
              </div>
            </div>
          </div>
          {imageURL && (
            <img
              src={imageURL}
              alt="placeholder"
              style={{
                maxWidth: '100%',
                maxHeight: '500px',
              }}
            />
          )}
        </div>
        {/*<input type="file" id="image" name="image" accept="image/*" />*/}
        {(altLoading || altProposition) && (
          <div className="mt-2">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Alt proposition
            </label>
            {altLoading && <p>Loading proposition...</p>}
            {altProposition && (
              <div className="flex gap-2">
                <p>{altProposition}</p>
                <button
                  role="button"
                  className="rounded-md bg-white px-3 py-1 text-sm font-semibold border-2 border-indigo-500 text-indigo-500 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={acceptProposition}
                >
                  Accept proposition
                </button>
              </div>
            )}
          </div>
        )}
        <div className="sm:col-span-4">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Alt text
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="alt"
                id="alt"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                value={alt}
                onChange={({ target }) => setAlt(target.value)}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
