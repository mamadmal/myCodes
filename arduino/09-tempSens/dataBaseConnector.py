import uno, sys

def load_library(library_name: str, module_name=None):
    doc = XSCRIPTCONTEXT.getDocument()  # current document
    url = uno.fileUrlToSystemPath( \
        '{}/{}'.format(doc.URL, 'Scripts/python'+library_name))  # ConvertToURL()
    if not url in sys.path:  # add path if necessary
        sys.path.insert(0, url)  # doclib takes precedence
    if module_name:  # import if requested
        return zipimport.zipimporter(url).load_module(module_name)

def import_embedded_python():
    ui = load_library("my_gui",'screen_io')  # add <lib> path + import <module>
    ui.MsgBox(sys.modules.keys())

g_exportedScripts = (import_embedded_python,)  # Public macros