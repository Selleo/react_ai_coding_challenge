import { ImageForm, List, Navigation } from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/image_upload" element={<ImageForm />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}
