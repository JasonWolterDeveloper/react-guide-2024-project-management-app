export default function CustomInput({ label, ...forwardedProps}) {
    return (
        <div>
            <label>
                {label}
            </label>
            <input {...forwardedProps}></input>
        </div>
    )
}