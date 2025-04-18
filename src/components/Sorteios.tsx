
import { Trophy, DollarSign, Award, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sorteios = () => {
  const premiosAtivos = [
    {
      id: 1,
      titulo: "R$ 50.000 em Dinheiro",
      descricao: "Sorteio Principal",
      dataFinal: "30 de Abril",
      valor: "R$ 50.000",
    },
    {
      id: 2,
      titulo: "R$ 25.000 em Dinheiro",
      descricao: "Sorteio Relâmpago",
      dataFinal: "20 de Abril",
      valor: "R$ 25.000",
    },
    {
      id: 3,
      titulo: "R$ 10.000 em Dinheiro",
      descricao: "Sorteio Especial",
      dataFinal: "15 de Abril",
      valor: "R$ 10.000",
    }
  ];

  const ultimosGanhadores = [
    {
      nome: "Maria S.",
      premio: "R$ 30.000",
      data: "15 de Março",
      cidade: "São Paulo, SP"
    },
    {
      nome: "João P.",
      premio: "R$ 15.000",
      data: "28 de Fevereiro",
      cidade: "Rio de Janeiro, RJ"
    },
    {
      nome: "Ana L.",
      premio: "R$ 5.000",
      data: "10 de Fevereiro",
      cidade: "Belo Horizonte, MG"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Prêmios Ativos */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Prêmios Ativos
        </h2>
        <div className="grid gap-4">
          {premiosAtivos.map((premio) => (
            <a
              key={premio.id}
              href="#"
              className="transform transition-all duration-300 hover:scale-[1.02]"
              data-secret-link={premio.id === 1 ? "sorteio-iphone" : undefined}
            >
              <Card className="border-2 border-primary/20 bg-gradient-to-r from-white to-gray-50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-bold text-primary">
                    {premio.titulo}
                  </CardTitle>
                  <DollarSign className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{premio.descricao}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{premio.dataFinal}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Últimos Ganhadores */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Trophy className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-center">Últimos Ganhadores</h2>
        </div>
        <div className="grid gap-4">
          {ultimosGanhadores.map((ganhador, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">{ganhador.nome}</p>
                  <p className="text-sm text-muted-foreground">{ganhador.cidade}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{ganhador.premio}</p>
                  <p className="text-sm text-muted-foreground">{ganhador.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="text-center">
        <p className="text-sm text-muted-foreground">
          Todos os prêmios são pagos em dinheiro via PIX em até 24h após o sorteio
        </p>
      </section>
    </div>
  );
};

export default Sorteios;
