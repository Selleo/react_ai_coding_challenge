import { createImage } from 'api/image/requests'
import { useState } from 'react'

export const ImageForm = () => {
  const [imageURL, setImageURL] = useState('')
  const [alt, setAlt] = useState('')
  const [altProposition, setAltProposition] = useState('')

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    createImage({ url: imageURL, alt })
  }

  const onChangeUrl = (url: string) => {
    setImageURL(url)
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
      setAltProposition(data.caption.text)
    }
  }
  const acceptProposition = () => {
    setAlt(altProposition)
    setAltProposition('')
  }
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={({ target }) => {
              onChangeUrl(target.value)
            }}
            value={imageURL}
          />
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
        {!!altProposition && (
          <div>
            <p>Alt propositions</p>
            <p>{altProposition}</p>
            <button onClick={acceptProposition}>Accept proposition</button>
          </div>
        )}
        <div>
          <label htmlFor="alt">Alt text</label>
          <input
            type="text"
            id="alt"
            name="alt"
            value={alt}
            onChange={({ target }) => setAlt(target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
