function UnitUpdater({ units, setUnits }) {
  return (
    <>
      <button
        onClick={() => {
          if (Number(units) === 1) return;
          setUnits(Number(units) - 1);
        }}
        className="aspect-square w-8 shrink-0 rounded-full bg-stone-400 p-1 font-bold"
      >
        -
      </button>
      <input
        value={units}
        onFocus={(e)=>e.target.select()}
        onChange={(e) => {
          let num = Number(e.target.value);
          num > 0 ? setUnits(num) : setUnits(1);
        }}
        className="w-1/1 rounded-md border border-stone-500 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        type="number"
      />
      <button
        onClick={() => {
          setUnits(Number(units) + 1);
        }}
        className="aspect-square w-8 shrink-0 rounded-full bg-stone-400 p-1 font-bold"
      >
        +
      </button>
    </>
  );
}

export default UnitUpdater;
