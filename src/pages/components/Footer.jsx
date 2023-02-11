export default function Footer() {
  return (
    <div>
      <footer>
        <div className="px-5 py-3 text-center bg-purple-900 font- text-white/60">
          <span>
            Copyright &copy;{' '}
            {new Date().getFullYear()} Al-Qur'an -
            All Rights Reserved
            <br />
            ❤️ made by{' '}
            <a
              href="https://budicuy.my.id/"
              target="_blank">
              <u>budicuy.my.id</u>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
