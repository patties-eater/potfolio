
export default function FooterPage(){
  return(
    <footer className="bg-gray-800 text-white py-4 flex items-center justify-center">
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}