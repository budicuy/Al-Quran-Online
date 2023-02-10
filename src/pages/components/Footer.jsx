export default function Footer() {
  return (
    <div>
      <footer>
        <div className="px-5 py-3 text-center bg-purple-900 font- text-white/60">
          <span>
            Copyright &copy;{' '}
            {new Date().getFullYear()} Al-Qur'an -
            All Rights Reserved | Powered by{' '}
            <u>Tailwindcss</u> & <u>Nextjs</u>
            <br />
            made with ❤️ by <u>budicuy.my.id</u>
          </span>
        </div>
      </footer>
    </div>
  )
}
