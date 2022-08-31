<template>
  <div id = "image">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 29">
      <g id="fondo">
        <rect width="121" height="29" style="fill: #59cbe8"/>
        <rect x="1" y="1" width="119" height="27" rx="3.64" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
      </g>
      <g id="pseudoanonimizados" v-if="checkedNames.indexOf('pseudoanonymized') !== -1">
        <g id="Capa_2" data-name="Capa 2">
          <g id="Capa_1-2" data-name="Capa 1-2">
            <circle cx="8.72" cy="7.94" r="6.06" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
            <path d="M8.91,8.67h0a3.08,3.08,0,0,0-3.31,3.57h6.64A3.08,3.08,0,0,0,8.91,8.67Z" transform="translate(-0.22 -0.2)"/>
            <polygon points="8.23 4.79 8.63 4.79 8.63 4.31 9.22 4.31 9.22 5.11 8.6 5.71 8.94 6.55 9.39 6.55 9.39 6.03 10.18 5.31 10.18 4.11 9.48 3.53 7.71 3.53 8.23 4.79"/>
            <polygon points="9.1 6.95 9.42 7.74 9.42 6.95 9.1 6.95"/>
            <polygon points="7.69 3.53 7.69 3.53 7.69 3.53 7.69 3.53"/>
            <path d="M7.76,3.79A2.23,2.23,0,0,0,9.42,7.91Z" transform="translate(-0.22 -0.2)" style="fill: #1d1d1d"/>
            <line x1="7.37" y1="2.92" x2="11.21" y2="12.42" style="fill: none"/>
            <circle cx="7.41" cy="5.27" r="0.42" style="fill: #fff"/>
          </g>
        </g>
      </g>
      <g id="datos_no_personales" v-if="checkedNames.indexOf('general_data') !== -1">
        <g>
          <polygon points="19.62 5.53 19.62 5.31 19.95 5.31 19.95 5.76 19.62 6.09 19.62 6.48 20 6.48 20 6.2 20.38 5.81 20.38 5.2 20.1 4.92 19.23 4.92 19.23 5.53 19.62 5.53" style="fill: #1d1d1d"/>
          <rect x="19.62" y="6.61" width="0.39" height="0.3" style="fill: #1d1d1d"/>
          <path d="M20,7.5h0a1.22,1.22,0,0,0-1.29,1.43h2.6A1.23,1.23,0,0,0,20,7.5" transform="translate(-0.22 -0.2)" style="fill: #010101;stroke: #010101;stroke-miterlimit: 10;stroke-width: 0.5px"/>
          <path d="M18.47,4.79H25.7a.52.52,0,0,1,.52.52v4a.52.52,0,0,1-.52.52H18.47A.52.52,0,0,1,18,9.26V5.31A.52.52,0,0,1,18.47,4.79Z" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          <line x1="22" y1="5.86" x2="25" y2="5.86" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <line x1="22" y1="7.27" x2="25" y2="7.27" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <line x1="22" y1="8" x2="25" y2="8" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <line x1="22" y1="8.65" x2="25" y2="8.65" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <line x1="22" y1="6.61" x2="25" y2="6.61" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <polygon points="22.07 9.62 21.51 9.62 21.51 12 20.2 12 21.73 13.48 23.24 12.01 22.07 12.01 22.07 9.62" style="fill: #1d1d1d"/>
          <ellipse cx="21.88" cy="8" rx="5.88" ry="6" style="fill: none;stroke: #010101;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
        </g>
      </g>
      <g id="transfer_externa" v-if="checkedNames.indexOf('third_party') !== -1">
        <g>
          <g id="Capa_3" data-name="Capa 3">
            <circle cx="61" cy="8" r="6" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          </g>
          <g id="Capa_4" data-name="Capa 4">
            <line x1="56.89" y1="6.66" x2="64.68" y2="6.66" style="fill: none;stroke: #000;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.30000000000000004px"/>
            <line x1="56.89" y1="6.66" x2="57.9" y2="5.65" style="fill: none;stroke: #000;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.30000000000000004px"/>
            <line x1="57.9" y1="7.68" x2="56.89" y2="6.68" style="fill: none;stroke: #000;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.30000000000000004px"/>
            <line x1="64.68" y1="9.25" x2="56.89" y2="9.25" style="fill: none;stroke: #000;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.30000000000000004px"/>
            <line x1="64.68" y1="9.25" x2="63.68" y2="8.24" style="fill: none;stroke: #000;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.30000000000000004px"/>
            <line x1="63.68" y1="10.27" x2="64.68" y2="9.26" style="fill: none;stroke: #000;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.30000000000000004px"/>
          </g>
        </g>
      </g>
      <g id="tratamiento_datos" v-if="checkedNames.indexOf('processed_time') !== -1">
        <g>
          <ellipse cx="47.91" cy="8.36" rx="6.1" ry="6.2" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          <ellipse cx="49.9" cy="4.92" rx="0.2" ry="0.19" style="fill: #202020"/>
          <ellipse cx="50.83" cy="4.95" rx="1.31" ry="1.33" style="fill: #fff;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.15px"/>
          <rect x="50.81" y="3.83" width="0.15" height="1.15" rx="0.06" style="fill: #202020"/>
          <path d="M50.47,6.05l0,0a.08.08,0,0,1,0,.1l-.4.59a.07.07,0,0,1-.09,0l0,0a.07.07,0,0,1,0-.09l.4-.6A.08.08,0,0,1,50.47,6.05Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <ellipse cx="50.9" cy="4.92" rx="0.2" ry="0.19" style="fill: #202020"/>
          <text id="processed_period" transform="translate(46.47 5.97) scale(0.93 1)" style="isolation: isolate;font-size: 3.322453260421753px;fill: #202020;font-family: Calibri-Bold, Calibri;font-weight: 700">{{ times_selected.processing_period[0] }}</text>
          <text id="processed_time" transform="translate(44.47 5.97) scale(0.93 1)" style="isolation: isolate;font-size: 3.322453260421753px;fill: #202020;font-family: Calibri-Bold, Calibri;font-weight: 700">{{ times_selected.processing_time }}</text>
          <path d="M48.6,9.93a2.1,2.1,0,0,0-1.39,2.6A2.06,2.06,0,0,0,49.77,14a2.09,2.09,0,0,0,1.39-2.6h0A2.06,2.06,0,0,0,48.6,9.93Zm.86,2.94a1,1,0,0,1-1.19-.66,1,1,0,0,1,.65-1.2,1,1,0,0,1,1.18.65,1,1,0,0,1-.64,1.21Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M49.2,10.44l-.86.26c-.05,0-.11,0-.12-.12L48,9.52a.1.1,0,0,1,0-.13l.66-.2a.1.1,0,0,1,.11.08l.4,1C49.27,10.35,49.25,10.43,49.2,10.44Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M49.16,13.44l.86-.26s.11,0,.12.12l.2,1.06c0,.07,0,.12-.05.14l-.66.19s-.09,0-.11-.08l-.4-1C49.09,13.53,49.11,13.45,49.16,13.44Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M50.15,10.87l-.7-.57a.13.13,0,0,1,0-.18l.73-.78s.1-.06.14,0l.54.44s0,.09,0,.14l-.58.91C50.27,10.87,50.19,10.9,50.15,10.87Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M48,13.11l.81.42s0,.1,0,.17l-.57.91c0,.06-.08.08-.12.06l-.62-.31s0-.08,0-.14l.39-1C47.93,13.14,48,13.09,48,13.11Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M50.76,12.29l-.47.78s0,.12.08.15l1,.48a.1.1,0,0,0,.13,0l.37-.6s0-.09,0-.13l-.85-.66A.12.12,0,0,0,50.76,12.29Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M47.68,11.67l.4-.82a.12.12,0,0,0-.09-.14l-1-.39c-.06,0-.12,0-.14,0l-.31.63s0,.09.06.12l.91.57A.12.12,0,0,0,47.68,11.67Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M48,12.82,47.7,12s-.1-.06-.17,0l-1,.47c-.06,0-.09.08-.08.12l.23.66a.1.1,0,0,0,.13,0l1-.26C48,12.93,48,12.86,48,12.82Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M50.65,12l-.21-.89c0-.05.05-.11.13-.12l1.06-.14a.1.1,0,0,1,.12.06l.16.68s0,.09-.09.11l-1,.35C50.74,12.09,50.66,12.07,50.65,12Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M45.74,8.47a1.47,1.47,0,0,0-2,.62,1.52,1.52,0,0,0,.62,2,1.46,1.46,0,0,0,2-.63A1.51,1.51,0,0,0,45.74,8.47Zm-1,1.94a.7.7,0,0,1-.29-.94.69.69,0,0,1,.93-.29.71.71,0,0,1,.29.94.69.69,0,0,1-.93.29Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M45.94,9.12l-.88-.47a.1.1,0,0,1,0-.13h0l.46-.63a.1.1,0,0,1,.12,0l.67.36a.11.11,0,0,1,0,.12l-.26.74a.09.09,0,0,1-.12,0Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M44.13,10.47,45,11a.08.08,0,0,1,0,.12v0l-.45.62a.1.1,0,0,1-.12,0l-.68-.36a.09.09,0,0,1,0-.12l.25-.73a.09.09,0,0,1,.12-.06Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M46,10.28l0-1a.1.1,0,0,1,.09-.1h0l.77.1a.11.11,0,0,1,.08.09l0,.78a.1.1,0,0,1-.08.1l-.76.13a.1.1,0,0,1-.11-.08Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M44,9.35l0,1a.1.1,0,0,1-.09.1h0l-.76-.1a.09.09,0,0,1-.08-.09l0-.78a.1.1,0,0,1,.08-.1l.76-.13a.09.09,0,0,1,.1.08Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M46,10.41l-.84.56a.09.09,0,0,0,0,.13h0l.51.58a.09.09,0,0,0,.12,0l.64-.42a.1.1,0,0,0,0-.12l-.32-.72a.09.09,0,0,0-.12,0Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
          <path d="M44.09,9.2l.83-.55a.09.09,0,0,0,0-.13v0l-.51-.58a.09.09,0,0,0-.12,0l-.64.43a.08.08,0,0,0,0,.11l.32.72a.11.11,0,0,0,.13,0Z" transform="translate(0.43 -1.22)" style="fill: #202020"/>
        </g>
      </g>
      <g id="datos_personales" v-if="checkedNames.indexOf('personal_data') !== -1">
        <g>
          <path d="M33.11,7.5h0a1.23,1.23,0,0,0-1.32,1.43h2.65A1.23,1.23,0,0,0,33.11,7.5" transform="translate(-0.22 -0.2)" style="fill: #010101"/>
          <rect x="30.77" y="4.58" width="8.43" height="4.99" rx="0.52" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          <line x1="35.13" y1="5.86" x2="38.19" y2="5.86" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <line x1="35.13" y1="7.27" x2="38.19" y2="7.27" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <line x1="35.13" y1="8" x2="38.19" y2="8" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <line x1="35.13" y1="8.65" x2="38.19" y2="8.65" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <line x1="35.13" y1="6.61" x2="38.19" y2="6.61" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <polygon points="35.2 9.62 34.62 9.62 34.62 12 33.29 12 34.84 13.48 36.39 12.01 35.2 12.01 35.2 9.62" style="fill: #1d1d1d"/>
          <circle cx="35" cy="8" r="6" style="fill: none;stroke: #010101;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          <ellipse cx="32.9" cy="6.32" rx="0.69" ry="0.67" style="fill: #1d1d1d"/>
        </g>
      </g>
      <g id="transfer_interna" v-if="checkedNames.indexOf('intern_transfer') !== -1">
        <g>
          <ellipse cx="74" cy="7.99" rx="6" ry="6.01" style="fill: none;stroke: #010101;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          <ellipse cx="71.7" cy="8.41" rx="0.63" ry="0.19" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <polyline points="71.07 8.41 71.07 9.36 71.07 9.42" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <path d="M71.29,8.94s-.06.13.48.17a1.77,1.77,0,0,0,.4,0c.16,0,.35-.06.38-.16" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <path d="M71.29,9.6s-.06.13.48.17a1.79,1.79,0,0,0,.4,0c.16,0,.34-.06.38-.15v0h0v-1" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <path d="M71.28,9.26s0,.13.49.17a1.79,1.79,0,0,0,.4,0c.16,0,.35-.06.38-.16" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <ellipse cx="74.01" cy="5.68" rx="0.53" ry="0.47" style="fill: none;stroke: #1d1d1b;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          <line x1="70.27" y1="10.73" x2="70.27" y2="6.88" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <polyline points="69.25 7.82 74.01 3.53 78.77 7.82" style="fill: none;stroke: #1d1d1b;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <line x1="77.75" y1="10.73" x2="77.75" y2="6.88" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <ellipse cx="76.32" cy="8.43" rx="0.63" ry="0.19" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <polyline points="75.69 8.43 75.69 9.37 75.69 9.43" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <path d="M75.9,9s-.05.13.49.17a1.79,1.79,0,0,0,.4,0c.16,0,.35-.06.38-.16" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <path d="M75.9,9.61s-.05.14.49.17h.39c.16,0,.35-.06.39-.16v0h0v-1" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <path d="M75.9,9.27s-.05.14.49.17h.39c.17,0,.36-.07.39-.17" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <g id="Capa_4-2" data-name="Capa 4">
            <line x1="72.86" y1="8.55" x2="75.14" y2="8.55" style="fill: none;stroke: #010101;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="72.86" y1="8.55" x2="73.16" y2="8.26" style="fill: none;stroke: #010101;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="73.16" y1="8.85" x2="72.86" y2="8.56" style="fill: none;stroke: #010101;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="75.14" y1="9.31" x2="72.86" y2="9.31" style="fill: none;stroke: #010101;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="75.14" y1="9.31" x2="74.84" y2="9.02" style="fill: none;stroke: #010101;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="74.84" y1="9.61" x2="75.14" y2="9.32" style="fill: none;stroke: #010101;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          </g>
        </g>
      </g>
      <g id="encriptados" v-if="checkedNames.indexOf('encrypted') !== -1">
        <g>
          <circle id="Rodona" cx="8.88" cy="20.88" r="6.12" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          <text transform="translate(4.73 19.93)" style="isolation: isolate;font-size: 4.165329933166504px;fill: #202020;font-family: Calibri-Bold, Calibri;font-weight: 700">****</text>
          <g id="Candau">
            <path d="M10.9,25.79H7.3a.23.23,0,0,1-.21-.24v-3a.23.23,0,0,1,.21-.24h3.6a.23.23,0,0,1,.21.24v3A.23.23,0,0,1,10.9,25.79Z" transform="translate(-0.22 -0.2)" style="fill: #fff;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <path d="M7.09,21.54a2,2,0,0,1,4,0" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="6.87" y1="21.34" x2="6.87" y2="22.43" style="fill: none;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="10.9" y1="21.34" x2="10.9" y2="22.43" style="fill: none;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <path d="M9.54,25l-.28-1.08a.45.45,0,0,0,.19-.61.45.45,0,0,0-.79.42.5.5,0,0,0,.19.19L8.57,25Z" transform="translate(-0.22 -0.2)" style="fill: #202020"/>
          </g>
        </g>
      </g>
      <g id="no_anonimizados" v-if="checkedNames.indexOf('no_anonymized') !== -1">
        <g>
          <ellipse cx="74" cy="20.87" rx="6" ry="6.13" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          <ellipse cx="73.99" cy="18.7" rx="1.94" ry="1.98" style="fill: #010101"/>
          <path d="M74.22,21.61h0c-3.72,0-3.27,3.61-3.27,3.61h6.57S77.94,21.59,74.22,21.61Z" transform="translate(-0.22 -0.2)" style="fill: #010101"/>
          <ellipse cx="73.05" cy="18.24" rx="0.42" ry="0.43" style="fill: #fff"/>
          <ellipse cx="74.95" cy="18.24" rx="0.42" ry="0.43" style="fill: #fff"/>
        </g>
      </g>
      <g id="metadata" v-if="checkedNames.indexOf('metadata') !== -1">
        <g>
          <path d="M48.68,24.3V21.17a0,0,0,0,0,0-.05h-.71a0,0,0,0,0,0,.05h0V24.3a0,0,0,0,1,0,0h-1.1a0,0,0,0,0,0,.05l0,0,1.53,1.49a0,0,0,0,0,.06,0l1.53-1.49a0,0,0,0,0,0-.07H48.72a0,0,0,0,1,0,0Z" transform="translate(-0.22 -0.2)" style="fill: #1d1d1d"/>
          <path d="M51.72,18.77l-1.41-.89a.47.47,0,0,0-.4-.06L45,19.42a.57.57,0,0,0-.31.73l.75,2.46a.56.56,0,0,0,.66.41L51,21.41a.45.45,0,0,0,.29-.28L52,19.56A.64.64,0,0,0,51.72,18.77Z" transform="translate(-0.22 -0.2)" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <ellipse cx="50.55" cy="19.31" rx="0.33" ry="0.34" style="fill: #fff;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.1px"/>
          <path d="M49.62,18.53,50.36,21a.24.24,0,0,1-.15.3l-3.93,1.29a.23.23,0,0,1-.29-.16L45.24,20a.25.25,0,0,1,.15-.3l3.94-1.28A.23.23,0,0,1,49.62,18.53Z" transform="translate(-0.22 -0.2)" style="fill: #fff;stroke: #000;stroke-miterlimit: 9.96242934480739;stroke-width: 0.2px"/>
          <text transform="matrix(0.93, -0.3, 0.29, 0.96, 45.77, 21.23)" style="isolation: isolate;font-size: 1.149649977684021px;fill: #1d1d1d;font-family: ArialRoundedMTBold, Arial Rounded MT Bold">&lt;meta&gt;</text>
          <ellipse cx="48" cy="20.8" rx="6" ry="6.2" style="fill: none;stroke: #010101;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
        </g>
      </g>
      <g id="almacenamiento" v-if="checkedNames.indexOf('stored_time') !== -1">
        <g>
          <text id="storage_period" transform="translate(30.84 24.11) scale(0.93 1)" style="isolation: isolate;font-size: 3.322453260421753px;fill: #202020;font-family: Calibri-Bold, Calibri;font-weight: 700">
            {{times_selected.storage_period[0]}}</text>
          <text id="storage_time" transform="translate(28.84 24.11) scale(0.93 1)" style="isolation: isolate;font-size: 3.322453260421753px;fill: #202020;font-family: Calibri-Bold, Calibri;font-weight: 700">
            {{times_selected.storage_time}}</text>
          <ellipse cx="33.06" cy="15.26" rx="3" ry="0.95" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <polyline points="30.06 15.26 30.06 19.88 30.06 20.16" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <polyline points="36.05 15.26 36.05 20.64 36.05 20.96" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <path d="M31.26,18.88s-.25.66,2.32.84a10.51,10.51,0,0,0,1.86,0c.78-.09,1.67-.31,1.83-.8" transform="translate(-1.2 -2.07)" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <ellipse cx="33.07" cy="19.82" rx="6.1" ry="6.31" style="fill: none;stroke: #010101;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          <path d="M31.26,22.12s-.25.66,2.31.84a9.62,9.62,0,0,0,1.86,0c.78-.09,1.68-.3,1.83-.8" transform="translate(-1.2 -2.07)" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <path d="M37.71,24.5c.07-1.51-.13-2.92-1.69-3" transform="translate(-1.2 -2.07)" style="fill: none;stroke: #171717;stroke-miterlimit: 10;stroke-width: 0.1px"/>
          <polygon points="36.32 22.23 36.73 22.23 36.52 22.62 36.32 22.23" style="fill: #1e1e1e"/>
          <ellipse cx="34.8" cy="21.06" rx="1.54" ry="1.59" style="fill: #fff;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          <rect x="34.77" y="19.72" width="0.17" height="1.36" rx="0.07" style="fill: #1d1d1d"/>
          <path d="M36.08,23l0,0a.09.09,0,0,1,0,.11l-.47.71a.09.09,0,0,1-.11,0l0,0a.08.08,0,0,1,0-.12L36,23A.07.07,0,0,1,36.08,23Z" transform="translate(-1.2 -2.07)" style="fill: #1d1d1d"/>
          <ellipse cx="34.86" cy="21" rx="0.21" ry="0.22" style="fill: #1d1d1d"/>
          <path d="M31.26,20.46s-.26.66,2.31.84a10.51,10.51,0,0,0,1.86,0c.78-.09,1.68-.31,1.83-.8" transform="translate(-1.2 -2.07)" style="fill: none;stroke: #1d1d1d;stroke-miterlimit: 10;stroke-width: 0.2px"/>
        </g>
      </g>
      <g id="cache" v-if="checkedNames.indexOf('local_cache') !== -1">
        <g>
          <path d="M88.18,4a1.18,1.18,0,0,0-.17.52,1.14,1.14,0,0,0,.25.18c.17.1.23.12.27.1a.1.1,0,0,0,0-.07s0-.07-.23-.19,0,0,.18,0a2.15,2.15,0,0,1,1.52.68,2,2,0,0,1,.72,1.18,1.12,1.12,0,0,1,0,.48,3,3,0,0,1-.06.33s0,.07.07.09.09,0,.1,0A2.59,2.59,0,0,0,91,6.59a1.74,1.74,0,0,0-.4-1.13,2.7,2.7,0,0,0-2.1-1.16h-.25l.06-.16c0-.15,0-.17,0-.19S88.23,3.92,88.18,4Z" transform="translate(-0.22 -0.2)"/>
          <path d="M82.87,6.52V8.2h4l.29-.07.3-.08V7.62c0-.5,0-.46-.26-.53l-.12,0,.18,0,.18,0v-.9L87.23,6c-.19,0-.2-.07,0-.1s.21,0,.21-.51V5l-.11,0a7.73,7.73,0,0,0-2.46-.12h-2Zm3.91-1.11v.5H83v-1h3.83ZM87.1,5l.2,0v.74l-.12,0L87,5.88h-.1a5.9,5.9,0,0,1,0-.94Zm-.32,1.52V7H83V6h3.83Zm.33-.42.21.05v.74l-.19.05c-.29.07-.27.11-.27-.42a2.91,2.91,0,0,1,0-.47Zm-.33,1.52v.49H83v-1h3.83Zm.31-.44.21.05V8L87.1,8l-.22.05a3.1,3.1,0,0,1,0-.48,4.29,4.29,0,0,1,0-.49Z" transform="translate(-0.22 -0.2)"/>
          <path d="M83.32,5.46v.31h1.93V5.14H83.32Zm1.84,0v.21H83.41V5.23h1.75Z" transform="translate(-0.22 -0.2)"/>
          <path d="M86,5.22a.27.27,0,1,0,.39.35A.27.27,0,0,0,86,5.22Zm.28.11a.19.19,0,0,1-.13.3.17.17,0,0,1-.17-.19A.17.17,0,0,1,86.23,5.33Z" transform="translate(-0.22 -0.2)"/>
          <path d="M83.32,6.56v.31h1.93V6.25H83.32Zm1.84,0v.22H83.41V6.33h1.75Z" transform="translate(-0.22 -0.2)"/>
          <path d="M85.91,6.34c-.07.06-.08.09-.08.2s0,.15.08.21a.28.28,0,0,0,.44-.1A.28.28,0,0,0,85.91,6.34Zm.29.07a.18.18,0,0,1,0,.29.12.12,0,0,1-.16,0,.17.17,0,0,1,0-.29.18.18,0,0,1,.11,0A.19.19,0,0,1,86.2,6.41Z" transform="translate(-0.22 -0.2)"/>
          <path d="M83.32,7.63v.31h1.93V7.32H83.32Zm1.83,0v.22H83.42V7.66a1.22,1.22,0,0,1,0-.22s.16,0,.87,0h.86Z" transform="translate(-0.22 -0.2)"/>
          <path d="M85.91,7.45a.23.23,0,0,0,0,.36.19.19,0,0,0,.19.09.26.26,0,0,0,.18-.47A.23.23,0,0,0,85.91,7.45Zm.31.06a.17.17,0,0,1-.13.29.15.15,0,0,1-.16-.17.21.21,0,0,1,0-.12.19.19,0,0,1,.13,0A.17.17,0,0,1,86.22,7.51Z" transform="translate(-0.22 -0.2)"/>
          <path d="M88.28,8a3.24,3.24,0,0,1-.36.39l-.35.37V9.1h-.08a.33.33,0,0,0-.27.13s0,.61,0,1.29v1.25l.07.06.07.08h2c2,0,2,0,2-.06l.06-.06V10.51c0-1.46,0-1.37-.24-1.4h-.13V8h-1.4C88.91,8,88.28,8,88.28,8ZM91,8.58V9.1h-.41a1.92,1.92,0,0,0-.48,0,.22.22,0,0,0-.11.12l0,.1H88.64l0-.09c-.08-.14-.16-.17-.55-.17h-.36V8.82h.71V8.06H91Zm-2.73.12a1,1,0,0,1-.26,0h-.26L88,8.43l.25-.26v.26A1.06,1.06,0,0,1,88.27,8.7Zm.12.51a.19.19,0,0,1,.1.1c.08.14.18.16.74.16l.65,0c.13,0,.15,0,.19-.12s.13-.15.75-.13a1.6,1.6,0,0,1,.5,0s.05.16.05,1.27,0,1.23-.05,1.27a10.57,10.57,0,0,1-2,0,15.29,15.29,0,0,1-2,0s0-.13,0-1.29V9.23h.07A5.46,5.46,0,0,1,88.39,9.21Z" transform="translate(-0.22 -0.2)"/>
          <path d="M83.38,9a2.87,2.87,0,0,0,0,.92,2.38,2.38,0,0,0,.73,1.14,2.68,2.68,0,0,0,.81.56,1.8,1.8,0,0,0,.88.2,1,1,0,0,1,.27,0s0,.07,0,.14,0,.22,0,.2.08-.06.16-.27.09-.28.07-.31a1.61,1.61,0,0,0-.26-.17c-.21-.11-.23-.12-.27-.08s0,.11.11.19l.14.07-.12,0a1.82,1.82,0,0,1-.78-.13,3,3,0,0,1-1.45-1.33,1.6,1.6,0,0,1-.07-1.14c0-.14,0-.18-.11-.18S83.41,8.91,83.38,9Z" transform="translate(-0.22 -0.2)"/>
          <circle cx="86.72" cy="7.94" r="6.06" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
        </g>
      </g>
      <g id="anonimizados" v-if="checkedNames.indexOf('anonymized') !== -1">
        <g>
          <ellipse cx="87" cy="20.8" rx="6" ry="6.2" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          <path d="M87.19,21.55h0c-3.72,0-3.27,3.65-3.27,3.65h6.57S90.91,21.53,87.19,21.55Z" transform="translate(-0.22 -0.2)"/>
          <path d="M86.87,17.8h-1V16.48h1.82l.69.61v1.25l-.79.74v.55h-.89v-.8l.72-.7V17.3h-.6Zm-.15,3.1V20h1v.86Z" transform="translate(-0.22 -0.2)"/>
        </g>
      </g>
      <g id="prescriptivo" v-if="checkedNames.indexOf('prescriptive_processing') !== -1">
        <g>
          <circle id="Rodona-2" data-name="Rodona" cx="61" cy="21" r="6" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          <g id="Document">
            <polygon points="62.32 24.31 57.33 24.31 57.33 18.51 58.01 17.75 58.78 16.9 62.32 16.9 62.32 24.31" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="58.78" y1="16.9" x2="58.78" y2="18.53" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="57.34" y1="18.51" x2="58.85" y2="18.51" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="57.92" y1="23.34" x2="61.65" y2="23.34" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="57.92" y1="22.4" x2="61.65" y2="22.4" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="57.92" y1="21.45" x2="61.65" y2="21.45" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="57.92" y1="20.5" x2="61.65" y2="20.5" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="57.92" y1="19.56" x2="61.65" y2="19.56" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          </g>
          <g id="Pastilaas" >
            <path d="M64.22,22.42h0a.56.56,0,0,1,.56.56v1.69a.56.56,0,0,1-.56.56h0a.56.56,0,0,1-.56-.56V23A.56.56,0,0,1,64.22,22.42Z" transform="translate(-0.22 -0.2)" style="fill: #fff;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <path d="M64.78,23.73v.94a.57.57,0,0,1-.56.56h0a.57.57,0,0,1-.56-.56v-.94" transform="translate(-0.22 -0.2)" style="fill: #202020;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <polygon points="60.93 24.2 60.95 24.67 61.13 24.89 61.36 24.52 60.93 24.2" style="fill: #fff;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <path d="M61.16,24.85c.1.39.65.59,1.24.44s.93-.46.87-.88" transform="translate(-0.22 -0.2)" style="fill: #fff;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <ellipse cx="62.22" cy="24.25" rx="1.09" ry="0.73" transform="translate(-4.26 15.79) rotate(-14.19)" style="fill: #fff;stroke: #202020;stroke-miterlimit: 9.99999991388904;stroke-width: 0.2px"/>
            <line x1="63.07" y1="23.84" x2="63.07" y2="24.28" style="fill: none;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="61.58" y1="23.42" x2="62.42" y2="24.68" style="fill: none;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          </g>
        </g>
      </g>
      <g id="predictivo" v-if="checkedNames.indexOf('predictive_processing') !== -1">
        <g>
          <ellipse id="Rodona-3" data-name="Rodona" cx="100" cy="20.89" rx="6" ry="6.11" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          <g id="Document-2" data-name="Document">
            <polygon points="101.32 24.26 96.33 24.26 96.33 18.36 97.01 17.59 97.78 16.72 101.32 16.72 101.32 24.26" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="97.78" y1="16.72" x2="97.78" y2="18.37" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="96.34" y1="18.35" x2="97.85" y2="18.35" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="96.92" y1="23.28" x2="100.65" y2="23.28" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="96.92" y1="22.31" x2="100.65" y2="22.31" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="96.92" y1="21.35" x2="100.65" y2="21.35" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="96.92" y1="20.39" x2="100.65" y2="20.39" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="96.92" y1="19.42" x2="100.65" y2="19.42" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          </g>
          <g id="Bola">
            <path d="M102.14,22.37,100.29,25a4.27,4.27,0,0,0,1.85.37" transform="translate(-0.22 -0.2)" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <path d="M102.14,22.37,104,25a3.56,3.56,0,0,1-1.86.37" transform="translate(-0.22 -0.2)" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <ellipse cx="101.93" cy="22.37" rx="1.85" ry="1.88" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <path d="M100.5,22.52a1.66,1.66,0,0,1,1.65-1.68h0" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <polygon points="101.93 21.12 102.2 21.99 103.09 21.99 102.37 22.52 102.65 23.38 101.93 22.85 101.21 23.38 101.48 22.52 100.76 21.99 101.65 21.99 101.93 21.12" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          </g>
        </g>
      </g>
      <g id="diagnostico" v-if="checkedNames.indexOf('diagnostic_processing') !== -1">
        <g>
          <ellipse id="Rodona-4" data-name="Rodona" cx="99.8" cy="8" rx="6.2" ry="6" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          <g id="Document-3" data-name="Document">
            <polygon points="101.16 11.31 96.01 11.31 96.01 5.51 96.71 4.75 97.51 3.9 101.16 3.9 101.16 11.31" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <line x1="97.51" y1="3.9" x2="97.51" y2="5.53" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <line x1="96.03" y1="5.51" x2="97.59" y2="5.51" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <line x1="96.62" y1="10.34" x2="100.48" y2="10.34" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <line x1="96.62" y1="9.4" x2="100.48" y2="9.4" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <line x1="96.62" y1="8.45" x2="100.48" y2="8.45" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <line x1="96.62" y1="7.5" x2="100.48" y2="7.5" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <line x1="96.62" y1="6.56" x2="100.48" y2="6.56" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          </g>
          <path d="M101,8.22l-.27-.08A.11.11,0,0,1,100.6,8V8a.11.11,0,0,1,.11-.11l.27-.12a.11.11,0,0,1,.12.11v.27A.11.11,0,0,1,101,8.22Z" transform="translate(-0.22 -0.2)" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          <path d="M101.82,8.22l.27-.08a.11.11,0,0,0,.12-.11V8a.11.11,0,0,0-.12-.11l-.27-.12a.11.11,0,0,0-.11.11h0v.27a.11.11,0,0,0,.11.11Z" transform="translate(-0.22 -0.2)" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          <path d="M100.6,8s-.55.16-.62.45c-.15.6,1.29,1.87,1.29,1.87" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          <path d="M102.21,8s.54.16.62.45c.15.6-1.29,1.88-1.29,1.88" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          <rect x="100.93" y="9.9" width="0.49" height="0.43" rx="0.05" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          <path d="M101.39,10.53a6.42,6.42,0,0,0-.37,1.32c0,1,.19,1.39.59,1.48a1.23,1.23,0,0,0,1.2-.56,2.31,2.31,0,0,0,.2-.88" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          <ellipse cx="102.78" cy="11.48" rx="0.21" ry="0.21" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.15px"/>
          <circle cx="102.78" cy="11.48" r="0.05" style="fill: #202020;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.15px"/>
        </g>
      </g>
      <g id="descriptivo" v-if="checkedNames.indexOf('descriptive_processing') !== -1">
        <g>
          <ellipse id="Rodona-5" data-name="Rodona" cx="22" cy="20.89" rx="6" ry="6.11" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.35000000000000003px"/>
          <g id="Document-4" data-name="Document">
            <polygon points="23.32 24.26 18.33 24.26 18.33 18.36 19.01 17.59 19.78 16.72 23.32 16.72 23.32 24.26" style="fill: #fff;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="19.78" y1="16.72" x2="19.78" y2="18.37" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="18.34" y1="18.35" x2="19.85" y2="18.35" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="18.92" y1="23.28" x2="22.65" y2="23.28" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="18.92" y1="22.31" x2="22.65" y2="22.31" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="18.92" y1="21.35" x2="22.65" y2="21.35" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="18.92" y1="20.39" x2="22.65" y2="20.39" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <line x1="18.92" y1="19.42" x2="22.65" y2="19.42" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          </g>
          <g id="Lupa">
            <path d="M24,23.36l1.85,1.55a.12.12,0,0,1,0,.17l-.1.12a.12.12,0,0,1-.17,0L23.7,23.66a.11.11,0,0,1,0-.16l.1-.13A.1.1,0,0,1,24,23.36Z" transform="translate(-0.22 -0.2)" style="fill: #fff;stroke: #202020;stroke-miterlimit: 10.0000000567026;stroke-width: 0.2px"/>
            <ellipse cx="22.82" cy="22.64" rx="1.1" ry="1.12" style="fill: #fff;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <path d="M22.25,22.55s.3-.26.42-.15.37.3.5.16.53,0,.53,0" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
            <path d="M22.25,23.48a.35.35,0,0,1,.48,0,.37.37,0,0,0,.44,0,.67.67,0,0,1,.38-.1c.15,0,.16.1.16.1" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #202020;stroke-miterlimit: 10;stroke-width: 0.2px"/>
          </g>
        </g>
      </g>
      <g id="cookies" v-if="checkedNames.indexOf('cookies') !== -1">
        <g id="Capa_2-2" data-name="Capa 2">
          <g id="Capa_1-2-2" data-name="Capa 1-2">
            <circle cx="112" cy="15" r="6" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M115.13,14.86a.79.79,0,0,1-1.23-.58c-2-.22-1-2-1-2a.76.76,0,0,1-.2-.82,3.87,3.87,0,0,0-.48,0,3.77,3.77,0,1,0,3.77,4A.81.81,0,0,1,115.13,14.86Z" transform="translate(-0.22 -0.2)" style="fill: none;stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M109.46,14.49a.42.42,0,0,0,.16,0s.24-.09.28.25c0,0,0,.36-.17.41a1,1,0,0,1-.45,0s-.16,0-.12-.32c0,0,0-.29.11-.32a.19.19,0,0,1,.12,0Z" transform="translate(-0.22 -0.2)" style="stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M111.54,15.8s0-.2-.25-.36c0,0,0,0-.19,0a.93.93,0,0,1-.28-.06s-.25,0-.15.31c0,0,0,.28.44.38,0,0,.26.1.34,0Z" transform="translate(-0.22 -0.2)" style="stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M110.57,17.37a.72.72,0,0,0-.15-.68s-.29-.33-.8.07c0,0-.24.15.07.48,0,0,0,0,.23.07s.24.11.24.11S110.32,17.67,110.57,17.37Z" transform="translate(-0.22 -0.2)" style="stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M112.88,17.8s-.38.11-.43-.14c0,0,0-.27-.27-.25,0,0-.36,0-.39.24,0,0-.07.53.27.44a.76.76,0,0,1,.66.13.33.33,0,0,0,.51,0s.14-.22,0-.35a.33.33,0,0,0-.22-.08Z" transform="translate(-0.22 -0.2)" style="stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M113.42,16.57c-.42-.07-.48-.18-.48-.18S113,16,113,16c.13-.31.46-.09.46-.09.22.14.2.29.2.29v.24S113.66,16.62,113.42,16.57Z" transform="translate(-0.22 -0.2)" style="stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M115.25,16.91a2,2,0,0,0,0-.25.54.54,0,0,0-.19-.39.37.37,0,0,0-.27-.07.27.27,0,0,0-.19.26c0,.4.22.42.22.42.26,0,.27.05.27.05S115.21,17,115.25,16.91Z" transform="translate(-0.22 -0.2)" style="stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M111.7,13.87s-.13-.13-.21-.13-.25,0-.4.49c0,0-.06.17.2.12a.43.43,0,0,1,.28,0s.12.09.21-.27A.31.31,0,0,0,111.7,13.87Z" transform="translate(-0.22 -0.2)" style="stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M113.29,15.21s-.33,0-.32-.2c0,0,0-.32.16-.32a.28.28,0,0,1,.26.3S113.4,15.22,113.29,15.21Z" transform="translate(-0.22 -0.2)" style="stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M110.9,12.51a.29.29,0,0,0-.43,0s-.3.29-.16.36a.38.38,0,0,1,.18.15s.05.12.31,0c0,0,.1,0,.14,0a.06.06,0,0,0,.09,0,.55.55,0,0,0,0-.33Z" transform="translate(-0.22 -0.2)" style="stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
            <path d="M111.81,11.92s0,.13-.14,0a.2.2,0,0,1-.08-.22s0-.11.09,0,0-.11.09-.07S111.83,11.74,111.81,11.92Z" transform="translate(-0.22 -0.2)" style="stroke: #000;stroke-miterlimit: 10;stroke-width: 0.25px"/>
          </g>
        </g>
      </g>
    </svg>

  </div>
</template>

<script>
export default {
  name: "IconImage",
  props:['checkedNames', 'times_selected'],
  data(){
    return{
      pseudoanonimizados: {
        display: ""
      },
      datos_no_personales: {
        display: ""
      },
      transfer_externa: {
        display: ""
      },
      tratamiento_datos: {
        display: ""
      },
      datos_personales: {
        display: ""
      },
      transfer_interna: {
        display: ""
      },
      encriptados: {
        display: ""
      },
      no_anonimizados: {
        display: ""
      },
      metadata: {
        display: ""
      },
      almacenamiento: {
        display: ""
      },
      cache: {
        display: ""
      },
      anonimizados: {
        display: ""
      },
      prescriptivo: {
        display: ""
      },
      predictivo: {
        display: ""
      },
      diagnostico: {
        display: ""
      },
      descriptivo: {
        display: ""
      },
      cookies: {
        display: ""
      }
    }
  },
  methods: {
    changeNoPersonales: function () {
      console.log("POJFPEADOJ")
      if (this.datos_no_personales.display === "none") {
        this.datos_no_personales.display = "";
      } else {
        this.datos_no_personales.display = "none";
      }


    }
  }
}

</script>
