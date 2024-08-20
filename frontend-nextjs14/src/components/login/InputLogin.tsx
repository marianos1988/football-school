"use client";

type Props = {
  type: string,
  className: string,
  name: string,
  placeholder: string

}

export default function InputLogin({ type, className, name, placeholder }:Props) {
  return(
    <>
      <div className={className}>
        <input type={type} name={name} placeholder={placeholder} />
      </div>
    </>
  )

}