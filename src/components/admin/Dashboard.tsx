
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, Newspaper, User } from "lucide-react";
import { Link } from "react-router-dom";

interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, description, icon, link }) => (
  <Link to={link}>
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </Link>
);

const Dashboard: React.FC = () => {
  const cardData = [
    {
      title: "Processos",
      value: 24,
      description: "Processos cadastrados",
      icon: <FileText className="h-4 w-4 text-chimelo-silver" />,
      link: "/admin/processos"
    },
    {
      title: "Assembleias",
      value: 7,
      description: "Assembleias registradas",
      icon: <Calendar className="h-4 w-4 text-chimelo-silver" />,
      link: "/admin/assembleias"
    },
    {
      title: "Notícias",
      value: 12,
      description: "Artigos publicados",
      icon: <Newspaper className="h-4 w-4 text-chimelo-silver" />,
      link: "/admin/noticias"
    },
    {
      title: "Usuários Admin",
      value: 2,
      description: "Usuários ativos",
      icon: <User className="h-4 w-4 text-chimelo-silver" />,
      link: "/admin/usuarios"
    }
  ];

  const recentUpdates = [
    {
      type: "Processo",
      title: "Processo nº 12345-67.2023.8.26.0100",
      date: "07/05/2025",
      status: "Atualizado",
      link: "/admin/processos/1"
    },
    {
      type: "Notícia",
      title: "Novidades na legislação trabalhista em 2025",
      date: "05/05/2025",
      status: "Publicado",
      link: "/admin/noticias/1"
    },
    {
      type: "Assembleia",
      title: "Assembleia Ordinária - 2° Trimestre/2025",
      date: "03/05/2025",
      status: "Agendada",
      link: "/admin/assembleias/1"
    },
    {
      type: "Processo",
      title: "Processo nº 54321-67.2023.8.26.0100",
      date: "01/05/2025",
      status: "Novo documento",
      link: "/admin/processos/2"
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Visão geral</h2>
        <p className="text-chimelo-silver">Bem-vindo ao painel administrativo do Chimelo Advogados.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            value={card.value}
            description={card.description}
            icon={card.icon}
            link={card.link}
          />
        ))}
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Atualizações recentes</h3>
        <div className="rounded-md border">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 bg-chimelo-black/5">
                  <th className="h-12 px-4 text-left align-middle font-medium">Tipo</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Título</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Data</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {recentUpdates.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-4 align-middle">{item.type}</td>
                    <td className="p-4 align-middle font-medium">
                      <Link 
                        to={item.link} 
                        className="hover:text-chimelo-silver transition-colors"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="p-4 align-middle">{item.date}</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-chimelo-black/10">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
