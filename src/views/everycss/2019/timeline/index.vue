<template>
  <div class="container">
    <section class="timeline">
      <ul>
        <li>
          <div>
            <time>1687</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Laws of motion</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Newton</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1785</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Law of electrostatic attraction</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Coulomb</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1827</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Law of Electric Resistance</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>G.S Ohm</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1831</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Electromagnetic Induction</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Michael Faraday</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1867</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Dynamite</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Alfred Nobel</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1895</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>X Rays</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Roentgen</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1897</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Electron</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>J.J.Thomson</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1898</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Radium</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Madam Curie</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1900</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Quantum Theory</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Max Plank</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1905</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Principle of Relativity</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Albert Einstein</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1905</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Photo electric effect</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Albert Einstein</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <time>1942</time>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>Nuclear Reactor</p>
            </div>
            <div class="scientist">
              <h1>Scientist</h1>
              <span>Anrico Fermi</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>

export default {

}
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container{
  font: normal 16px/1.5 'Titillium Web', sans-serif;
  background: linear-gradient(54deg, #9164ff, #8bfff4);
  color: #3c3f64;
  overflow-x: hidden;
  padding-bottom: 50px;
  .timeline ul li {
    list-style-type: none;
    position: relative;
    width: 6px;
    margin: 0 auto;
    padding-top: 50px;
    background: #fff;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 20px;
      height: 20px;
      background: #eee;
      transform: translateX(-50%) rotate(45deg);
      border-radius: 45%;
    }
    &:nth-of-type(odd) div {
      transform:translate3d(100px, -10px, 0)  rotate(10deg);
    }
    &:nth-of-type(odd) > div {
      left: 45px;
    }
    &:nth-of-type(even) div {
      transform: translate3d(-100px, -10px, 0) rotate(10deg);
    }
    &:nth-of-type(even) > div {
      left: -439px;
    }
    div {
      position: relative;
      background: red;
      width:400px;
      padding: 20px;
      bottom: 0;
      border-radius: 5px;
      align-items: center;
      box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
      display: flex;
      // visibility: hidden;
      // opacity: 0;
      transition: all 0.5s ease-in-out;
      time {
        position: absolute;
        background: #f5af19;
        width: 80px;
        height: 30px;
        top: -15px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
      }
      div {
        background: green;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          text-align: center;
        }
      }
      .discovery {
        margin-left: 10px;
      }
    }
    .in-view {
      div {
        transform: none;
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
</style>

