export default function Footer() {
    return (
        <div>
            <footer>
                <div className="px-5 py-3 text-center bg-purple-900 font- text-white/60">
                    <span>
                        Copyright &copy;
                        {new Date().getFullYear()} All Rights
                        Reserved
                        <br />
                        ❤️ made by{' '}
                        <a
                            href="https://budiannor.my.id/"
                            target="blank">
                            <u>budiannor.my.id</u>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    )
}
