export default function Card({ img, title }) {
  return (
    <div className="card">
      <figure>
        <img src={img} alt={img} className="card-img-top  image-fluid" />
        <figcaption className="card-body">
          <h4 className="card-title text-center rounded-4">{title}</h4>
        </figcaption>
      </figure>
    </div>
  );
}
