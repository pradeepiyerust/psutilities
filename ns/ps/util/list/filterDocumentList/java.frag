<?xml version="1.0" encoding="UTF-8"?>

<Values version="2.0">
  <value name="name">filterDocumentList</value>
  <array name="sig" type="value" depth="1">
    <value>[i] record:1:required originalList</value>
    <value>[i] record:1:required filter</value>
    <value>[i] - field:0:required columnName</value>
    <value>[i] - field:1:required columnValues</value>
    <value>[i] - field:0:optional operator {"equals","equalsIgnoreCase","=","&gt;","&lt;","&gt;=","&lt;=","max","min"}</value>
    <value>[i] record:1:optional columnTypes</value>
    <value>[i] - field:0:required name</value>
    <value>[i] - field:0:required type {"String","Numeric","Date"}</value>
    <value>[i] - field:0:optional pattern</value>
    <value>[o] record:1:required filteredList</value>
  </array>
  <value name="subtype">unknown</value>
  <value name="sigtype">java 3.5</value>
  <value name="encodeutf8">true</value>
  <value name="body">SURhdGFDdXJzb3IgY3Vyc29yID0gcGlwZWxpbmUuZ2V0Q3Vyc29yKCk7CklEYXRhW10gb3JpZ2lu
YWxMaXN0ID0gSURhdGFVdGlsLmdldElEYXRhQXJyYXkoY3Vyc29yLCAib3JpZ2luYWxMaXN0Iik7
CklEYXRhW10gZmlsdGVyID0gSURhdGFVdGlsLmdldElEYXRhQXJyYXkoY3Vyc29yLCAiZmlsdGVy
Iik7CklEYXRhW10gY29sdW1uVHlwZXMgPSBJRGF0YVV0aWwuZ2V0SURhdGFBcnJheShjdXJzb3Is
ICJjb2x1bW5UeXBlcyIpOwppZiAob3JpZ2luYWxMaXN0ID09IG51bGwgfHwgZmlsdGVyID09IG51
bGwpCnsKICByZXR1cm47Cn0KCkFycmF5TGlzdCBsaXN0ID0gbmV3IEFycmF5TGlzdCgpOwoKb3V0
ZXI6IGZvciAoaW50IGkgPSAwOyBpIDwgb3JpZ2luYWxMaXN0Lmxlbmd0aDsgaSsrKQp7CiAgSURh
dGFDdXJzb3IgbGlzdEN1cnNvciA9IG9yaWdpbmFsTGlzdFtpXS5nZXRDdXJzb3IoKTsKICBib29s
ZWFuIG1hdGNoZWQgPSB0cnVlOwogIGZvciAoaW50IGogPSAwOyBqIDwgZmlsdGVyLmxlbmd0aDsg
aisrKQogIHsKICAgIElEYXRhQ3Vyc29yIGZpbHRlckN1cnNvciA9IGZpbHRlcltqXS5nZXRDdXJz
b3IoKTsKICAgIFN0cmluZyBjb2x1bW5OYW1lID0gSURhdGFVdGlsLmdldFN0cmluZyhmaWx0ZXJD
dXJzb3IsICJjb2x1bW5OYW1lIik7CiAgICBTdHJpbmcgb3BlcmF0b3IgPSBJRGF0YVV0aWwuZ2V0
U3RyaW5nKGZpbHRlckN1cnNvciwgIm9wZXJhdG9yIik7CiAgICBpZiAob3BlcmF0b3IgPT0gbnVs
bCkKICAgIHsKICAgICAgb3BlcmF0b3IgPSAiZXF1YWxzIjsKICAgIH0KCiAgICBTdHJpbmdbXSBj
b2x1bW5WYWx1ZXMgPSBJRGF0YVV0aWwuZ2V0U3RyaW5nQXJyYXkoZmlsdGVyQ3Vyc29yLCAiY29s
dW1uVmFsdWVzIik7CiAgICBTdHJpbmcgaXRlbVZhbHVlID0gSURhdGFVdGlsLmdldFN0cmluZyhs
aXN0Q3Vyc29yLCBjb2x1bW5OYW1lKTsKICAgIFN0cmluZ1tdIGNvbHVtbkluZm8gPSBnZXRDb2x1
bW5JbmZvKGNvbHVtblR5cGVzLCBjb2x1bW5OYW1lKTsKCiAgICB0cnkKICAgIHsKICAgICAgaWYg
KG9wZXJhdG9yLmVxdWFscygibWF4IikgfHwgb3BlcmF0b3IuZXF1YWxzKCJtaW4iKSkKICAgICAg
ewogICAgICAgIGludFtdIGluZGljZXMgPSBnZXRNYXhNaW5WYWx1ZXNJbmRpY2VzKG9yaWdpbmFs
TGlzdCwgY29sdW1uTmFtZSwgY29sdW1uSW5mb1swXSwgY29sdW1uSW5mb1sxXSwgb3BlcmF0b3Ip
OwogICAgICAgIGZvciAoaW50IGsgPSAwOyBrIDwgaW5kaWNlcy5sZW5ndGg7IGsrKykKICAgICAg
ICB7CiAgICAgICAgICBsaXN0LmFkZChvcmlnaW5hbExpc3RbaW5kaWNlc1trXV0pOwogICAgICAg
IH0KICAgICAgICBicmVhayBvdXRlcjsKICAgICAgfQoKICAgICAgaWYgKCFtYXRjaEFueShpdGVt
VmFsdWUsIGNvbHVtblZhbHVlcywgb3BlcmF0b3IsIGNvbHVtbkluZm9bMF0sIGNvbHVtbkluZm9b
MV0pKQogICAgICB7CiAgICAgICAgbWF0Y2hlZCA9IGZhbHNlOwogICAgICAgIGJyZWFrOwogICAg
ICB9CiAgICB9CiAgICBjYXRjaCAoRXhjZXB0aW9uIGUpCiAgICB7CiAgICAgIHRocm93IG5ldyBT
ZXJ2aWNlRXhjZXB0aW9uKGUpOwogICAgfQogIH0KCiAgaWYgKG1hdGNoZWQpCiAgewogICAgbGlz
dC5hZGQob3JpZ2luYWxMaXN0W2ldKTsKICB9CiAgbGlzdEN1cnNvci5kZXN0cm95KCk7Cn0KCklE
YXRhW10gZmlsdGVyZWRMaXN0ID0gbnVsbDsKCmlmIChsaXN0LnNpemUoKSA+IDApCnsKICBmaWx0
ZXJlZExpc3QgPSBuZXcgSURhdGFbbGlzdC5zaXplKCldOwogIGxpc3QudG9BcnJheShmaWx0ZXJl
ZExpc3QpOwp9CgpJRGF0YVV0aWwucHV0KGN1cnNvciwgImZpbHRlcmVkTGlzdCIsIGZpbHRlcmVk
TGlzdCk7CmN1cnNvci5kZXN0cm95KCk7Cg==</value>
</Values>
