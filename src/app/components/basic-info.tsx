export default function BasicInfo() {
  return (
    <div className="text-sm">
      <div>
        <span className="font-medium">LinkedIn:</span>{' '}
        <a
          href="https://www.linkedin.com/in/benbotvinick"
          target="_blank"
          className="text-blue-700 underline"
        >
          https://www.linkedin.com/in/benbotvinick
        </a>
      </div>
      <div>
        <span className="font-medium">Location:</span>{' '}
        <span>Palo Alto, CA</span>
      </div>
      <div>
        <span className="font-medium">Occupation:</span>{" "}
        <span>Student</span>
      </div>
      <div>
        <span className="font-medium">Interests:</span>{" "}
        <span>
          Psychology, psychopharmacology, philosophy of mind, mood disorders, addiction medicine, music
        </span>
      </div>
      <div>
        <span className="font-medium">Hobbies:</span>{' '}
        <span>
          Guitar, tennis, live music, reading, hiking, traveling, angel investing
        </span>
      </div>
    </div>
  );
}
