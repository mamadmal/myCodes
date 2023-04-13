from odf import text, teletype
from odf.opendocument import load, OpenDocumentText
from odf.text import P


doc = load('./orginalText.odt')


content = ""

for para in doc.getElementsByType(text.P):
    content += teletype.extractText(para)

print(content)


var = content.replace("with", "hhhhh")
print(var)
# part 2

newDoc = OpenDocumentText()

newpara = P(text=var) # this variable from before
newDoc.text.addElement(newpara)

doc.save('new.odt')