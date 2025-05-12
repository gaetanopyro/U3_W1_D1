const ImageComponent = function (props) {
  return (
    <div className="container">
      <img src={props.Imagesrc} alt="photo" width={300} />
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto odit cumque commodi repellat quae ab, corrupti earum, delectus consectetur, deserunt
        tempora voluptatem aliquid distinctio voluptatum sit temporibus minus! Beatae, officia!
      </p>
    </div>
  );
};
export default ImageComponent;
