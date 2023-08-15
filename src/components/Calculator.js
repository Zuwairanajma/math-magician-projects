export default function Calculator() {
  return (
    <div className="Outer-Container">
      <div className="Inner-Container">
        <p>0</p>
      </div>
      <BoardFeature />
    </div>
  );
}

function BoardFeature() {
  return (
    <div className="button">
      <button type="submit" className="btn" name="AC">AC</button>
      <button type="submit" className="btn" name="+/-">+/-</button>
      <button type="submit" className="btn" name="%">%</button>
      <button type="submit" className="btn btn-orange" name="÷">÷</button>
      <br />
      <button type="submit" className="btn" name="7">7</button>
      <button type="submit" className="btn" name="8">8</button>
      <button type="submit" className="btn" name="9">9</button>
      <button type="submit" className="btn btn-orange" name="x">x</button>
      <br />
      <button type="submit" className="btn" name="4">4</button>
      <button type="submit" className="btn" name="5">5</button>
      <button type="submit" className="btn" name="6">6</button>
      <button type="submit" className="btn btn-orange" name="-">-</button>
      <br />
      <button type="submit" className="btn" name="4">1</button>
      <button type="submit" className="btn" name="5">2</button>
      <button type="submit" className="btn" name="6">3</button>
      <button type="submit" className="btn btn-orange" name="+">+</button>
      <br />
      <button type="submit" className="zero" name="0">0</button>
      <button type="submit" className="btn" name=".">.</button>
      <button type="submit" className="btn btn-orange" name="=">=</button>
    </div>
  );
}
