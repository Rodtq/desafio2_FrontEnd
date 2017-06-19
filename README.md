# desafio2_FrontEnd
Desafio 2 projeto de front End para a Lenovo

desafio 2 para Lenovo - projeto do Backend

1- Passos para rodar o projeto
1.1 instalar node e configrar node https://nodejs.org/en/
1.2 instalar npm e configurar o npm https://www.npmjs.com/
1.3 na pasta do projeto abrir o prompt de comandos e instalar o bower, gulp e o npm no projeto, baixando e instalando assim suas dependencias
comandos:
npm install -g gulp
npm install -g bower
bower install
npm install
1.4 se for de sua preferência poderá rodá-lo no ambiente de desenvolvimento para isso será necessário instalar uma IDE como Netbeans. 1.5 ao instalar e configurar a IDE você deverá baixar o projeto do github e abrí-lo em sua Ide 1.6 após ter aberto o projeto será necessário clicar com o mous e com o botão direito e clicar em npm install e bower install para as dependencias do projeto serem baixadas e instaladas
1.5 mover a pasta bower_components para dentro da pasta app 

Conclusão:
Esta interface foi criada para que seja possível a intereção com o backend, o Gerenciador, o gerenciador, por sua vez tem sua própia interface rest para se comunicar com o simulador obtendo a seguinte configuração:

                                    Gerenciador
                       +======================================+     
+========+             +==========+                 +=========+                   +=========+
+usuário +  ---REST----+ FrontEnd + -----REST------ + BackEnd + ------REST------ +Simulador+
+========+             +==========+                 +=========+                   +=========+
                       +======================================+                                       
                                                         |
                                                   +================+
                                                   + Banco de dados +
                                                   +================+
