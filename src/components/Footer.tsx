export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-gray-800 py-6 px-4">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
        <div className="text-sm">
          <p>
            © {currentYear} par{" "}
            <span className="font-semibold text-black">Akram Brahem</span>
          </p>
        </div>

        <div className="text-sm flex gap-2">
          <p className="font-semibold text-black text-center">E-mail: </p>
          <a
            href="mailto:akramshanfara.52@gmail.com"
            className="hover:text-blue-600 break-words"
          >
            akramshanfara.52@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
