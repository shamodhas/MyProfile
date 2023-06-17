const lbl_new_value = $('#lblNewValue');
const lbl_old_value = $('#lblOldValue');

$('.input-button').click((event)=>{
    let pre_value = lbl_new_value.text();
    let target_value = event.target.innerText;

    if (!(target_value === "." && pre_value.includes('.')))
    lbl_new_value.text((pre_value==="0"?"":pre_value)+target_value);
})

$('.btn-operator').click((event)=>{
    let old_value = lbl_old_value.text();
    let new_value = lbl_new_value.text();
    new_value = (new_value === "0")? old_value.substring(0, old_value.length-1):
        eval((old_value === "0" ? "" : old_value) + new_value);

    lbl_old_value.text(new_value + event.target.innerText);
    lbl_new_value.text("0");
})

$('#btn-percent').click(()=>{
    let value = lbl_new_value.text();
    if (value > 0) value = value.substring(1, value.length);
    lbl_new_value.text(eval(value+"%"));
})

$('#btn-change-sign').click(()=>{
    let value = lbl_new_value.text();
    lbl_new_value.text((value > 0)? "-" + value :
        value.includes('-')? value.substring(1, value.length) :
            value
    );

})

$('#btn-equal').click(()=>{
    lbl_new_value.text(eval(lbl_old_value.text() + lbl_new_value.text()));
    lbl_old_value.text("0")
})

$('#btn-del').click((event)=>{
    lbl_new_value.text(lbl_new_value.text().length===1?"0":lbl_new_value.text().slice(0, lbl_new_value.text().length-1))
})

$('#btn-clear-all').click((event)=>{
    lbl_new_value.text("0");
    lbl_old_value.text("0");
})

$('#btn-clear-line').click((event)=>{
    lbl_new_value.text("0");
})
