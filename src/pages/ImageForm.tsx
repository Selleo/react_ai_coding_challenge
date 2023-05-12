import { createImage } from 'api/image/requests'
import { useState } from 'react'

export const ImageForm = () => {
  const [imageURL, setImageURL] = useState('')
  const [alt, setAlt] = useState('')
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    createImage({ url: imageURL, alt })
  }
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={({ target }) => setImageURL(target.value)}
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
        {/*<input type="file" id="image" name="image" accept="image/*" />*/}
        <label htmlFor="alt">Alt text</label>
        <input
          type="text"
          id="alt"
          name="alt"
          value={alt}
          onChange={({ target }) => setAlt(target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
