class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;

constructor(){
    this.templateElement =<HTMLTemplateElement> document.getElementById('project-input')!;
    this.hostElement =<HTMLDivElement> document.getElementById('app')!

    const importedNode = document.importNode(this.templateElement.content,true);    
    this.element =<HTMLFormElement> importedNode.firstElementChild ;
    this.attach();
}
private attach(){
    this.hostElement.insertAdjacentElement('afterbegin',this.element);
}
}

const prjInput = new ProjectInput()