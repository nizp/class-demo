doctype
html
    meta(charset="utf-8")
    style.
      div{width:100px;height:100px;background:red;margin:5px;}
      div.active{
        background:yellow;
      }
    body
      -var i = 0
       while i < 12
        if i%2 == 0
          div.active=i++
        else
          div=i++

      span|123
