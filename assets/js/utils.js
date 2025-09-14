// Money & quote renderer
const formatMoney = (num) => (num||0).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const renderQuoteTable = ({ title, subtitle, rows, grand }) => {
  const rowsHtml = rows.map(r=>{
    const w_cm = (r.w||0)*100;
    const h_cm = (r.h||r.hAdj||0)*100;
    return `
    <tr>
      <td>${r.index}</td>
      <td>${r.code}</td>
      <td>${w_cm.toFixed(0)} x ${h_cm.toFixed(0)} ซม.</td>
      <td class="text-center">${r.qty||1}</td>
      <td class="text-end">${formatMoney(r.price||0)}</td>
      <td class="text-end fw-semibold">${formatMoney(r.total||0)}</td>
    </tr>`;
  }).join('');
  return `
  <div class="p-3">
    <div class="mb-3">
      <h4 class="fw-bold mb-1">${title}</h4>
      <div class="text-secondary">${subtitle||''}</div>
    </div>
    <div class="border rounded">
      <table class="table m-0">
        <thead class="table-light">
          <tr>
            <th style="width:60px">ลำดับ</th>
            <th>รหัสสินค้า</th>
            <th>ขนาดที่คำนวณ (กว้าง x สูง)</th>
            <th class="text-center">จำนวนชุด</th>
            <th class="text-end">ราคา/ตร.ม.</th>
            <th class="text-end">ราคารวม</th>
          </tr>
        </thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      <div class="p-3 text-end fw-bold">ยอดรวมสุทธิ: THB ${formatMoney(grand||0)}</div>
    </div>
  </div>`;
};
