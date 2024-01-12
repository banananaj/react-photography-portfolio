import ImageComponent from "../components/ImageComponentsProps"
export function MainPage() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <header className="flex justify-between items-center py-8">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a className="text-sm uppercase tracking-wide" href="#">
                About Me
              </a>
            </li>
            <li>
              <a className="text-sm uppercase tracking-wide" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a className="text-sm uppercase tracking-wide" href="#">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="text-4xl font-bold">정기동</h1>

      </header>
      
      <main className="grid grid-cols-3">
        <ImageComponent imageUrl="url(/images/assets/landing-background-2.jpg)" imageTitle="sample1" />
        <ImageComponent imageUrl="url(/images/assets/landing-background-3.jpg)" imageTitle="sample2" />
        <ImageComponent imageUrl="url(/images/assets/landing-background-4.jpg)" imageTitle="sample3" />
        <ImageComponent imageUrl="url(/images/assets/landing-background-1.jpg)" imageTitle="sample4" />
        <ImageComponent imageUrl="url(/images/assets/landing-background-5.jpg)" imageTitle="sample5" />

      </main>
    </div>
  )
}
