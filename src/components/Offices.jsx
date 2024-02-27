import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li className="hover:bg-gray-100 p-3 rounded-xl w-full">
        <a href="https://goo.gl/maps/tRw3oUjmgLyh6kvF6" target="_blank">
          <Office name="VIT - AP" invert={invert}>
            VIT-AP Central Block
            <br />
            Amravathi, Andhra Pradesh 522237
          </Office>
        </a>
      </li>
    </ul>
  );
}
