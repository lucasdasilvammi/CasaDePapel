export default function Trailers() {
  return (
    <>
<div className="h-full bg-noir flex justify-center items-center flex-col gap-12 py-12 sm:py-16 md:py-24 lg:py-32">
  <h2 className="text-blanc uppercase font-ff-casa text-6xl">Trailers</h2>
  <div className="flex flex-wrap gap-6 justify-center px-marge-phone sm:p-0 sm:w-full">
    <iframe
      width="560" 
      height="315"
      src="https://www.youtube.com/embed/_InqQJRqGW4?si=lRqlnCxjXLFR3vkq"
      className="rounded-xl w-full sm:max-w-video-md sm:max-h-video-md duration-500 hover:shadow-[0_0px_100px_rgba(189,_48,_45,_1)]"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <iframe
      width="560" 
      height="315"
      src="https://www.youtube.com/embed/TFJwUwnShnA?si=buZPNXWAtjHim2NG"
      className="rounded-xl w-full sm:max-w-video-md sm:max-h-video-md duration-500 hover:shadow-[0_0px_100px_rgba(189,_48,_45,_1)]"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
    <iframe
      width="560" 
      height="315"
      src="https://www.youtube.com/embed/p_PJbmrX4uk?si=QoZIZmiOWSunk411"
      className="rounded-xl w-full sm:max-w-video-md sm:max-h-video-md duration-500 hover:shadow-[0_0px_100px_rgba(189,_48,_45,_1)]"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</div>
    </>
  )
}