export default function LoadingComponent() {
    return (
        <div className="flex items-center justify-center w-full min-h-[70vh] mt-5 md:mt-10">
            <svg
                className="w-10 h-10 text-purple-500 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
        </div>
    )
}
