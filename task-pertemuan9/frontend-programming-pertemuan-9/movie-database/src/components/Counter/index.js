import { useEffect, useState } from "react";

function Counter() {
  

  /**
   * useState mengembalikan sepasang value (array): [0, function()]
   */

  const [angka, setAngka] = useState(0);

  function addAngka() {
    setAngka(angka + 1);
    
  }

  // useEffect dijalankan pada lifecycle amount dan updateS
  function updateDOM () {
    console.log("Lifecycle: Diamount");

    //melakukan side effect: mengakses DOM
    document.title = `Hasil: ${angka}`;
  };

  useEffect(updateDOM, [angka]);
  console.log("Lifecycle: Dirender");

  return(
    <div>
      <p>Hasil: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;


/*..
  // Import useState dari React (desctructing).
  import { useState } from "react";

  function Counter() {
    /**
     * Membuat state menggunakan useState dan set nilai awal 0
     * useState mengembalikan 2 nilai:
     * - Berisi current value: result.
     * - Berisi fungsi untuk mengupdate result: setResult.
     * Melakukan destructing array dari hasil useState
     */
   /* ..const [result, setResult] = useState(0);

    function handleClick() {
      /**
       * Update state result menggunakan fungsi setResult
       */
     /*.. setResult(result + 1);
    }

    return (
      <div>
        <p>Result: {result} </p>
        <button onClick={handleClick}>Add</button>
      </div>
    );
  }
  export default Counter;
*/