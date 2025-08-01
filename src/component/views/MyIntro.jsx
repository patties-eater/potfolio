import { Download } from "../modules/downloadCv"
export function MyIntro(){
  return(
    <>
    <div className="introSection w-200 m-30">
      <div className="namePost text-5xl w-130 font-bold">
        <p>Hi, I am Prajjwal,
        Creative Technologist</p>
      </div>

      <div className="detail w-200 text-3xl pt-5">
        <p>A passionate Class 12 Computer Science student at Amity College, Birtamod, with a strong drive toward full-stack web development. Currently building hands-on projects using React, Tailwind, and JavaScript, while exploring modern tools to stay ahead of the curve.</p>
      </div>
      <Download/>
    </div>
    </>
  )
} 