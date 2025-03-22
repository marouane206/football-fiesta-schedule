
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nom: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  description: z.string().min(10, { message: "La description doit contenir au moins 10 caractères" }),
  cuisine: z.string().min(2, { message: "Le type de cuisine est requis" }),
  image: z.string().url({ message: "L'URL de l'image n'est pas valide" }),
  prix: z.string().min(1, { message: "La fourchette de prix est requise" }),
  ville: z.string().min(2, { message: "La ville doit contenir au moins 2 caractères" }),
  distance: z.string().min(1, { message: "La distance est requise" }),
  stadeId: z.string().min(1, { message: "Le stade associé est requis" }),
  noteClient: z.coerce.number().min(1).max(5).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface RestaurantFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: FormValues) => void;
}

export function RestaurantFormDialog({ open, onOpenChange, onSubmit }: RestaurantFormDialogProps) {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      description: "",
      cuisine: "",
      image: "",
      prix: "",
      ville: "",
      distance: "",
      stadeId: "",
      noteClient: 4,
    },
  });

  const handleSubmit = async (data: FormValues) => {
    try {
      onSubmit(data);
      
      form.reset();
      onOpenChange(false);
      toast({
        title: "Restaurant ajouté",
        description: `Le restaurant ${data.nom} a été ajouté avec succès.`,
      });
    } catch (error) {
      console.error('Error adding restaurant:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'ajout du restaurant. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    form.reset();
    toast({
      title: "Formulaire réinitialisé",
      description: "Toutes les valeurs ont été réinitialisées.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Ajouter un nouveau restaurant</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire pour ajouter un nouveau restaurant partenaire.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom du restaurant</FormLabel>
                    <FormControl>
                      <Input placeholder="La Table Marocaine" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="ville"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ville</FormLabel>
                    <FormControl>
                      <Input placeholder="Casablanca" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cuisine"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de cuisine</FormLabel>
                    <FormControl>
                      <Input placeholder="Marocaine" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="prix"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fourchette de prix</FormLabel>
                    <FormControl>
                      <Input placeholder="100-200 DH" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="distance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Distance du stade</FormLabel>
                    <FormControl>
                      <Input placeholder="2.5 km" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="stadeId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID du stade associé</FormLabel>
                    <FormControl>
                      <Input placeholder="stade-marrakech" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="noteClient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Note clients (1-5)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="5" step="0.1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL de l'image</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Décrivez le restaurant, sa cuisine et son ambiance..." 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleReset}>
                Réinitialiser
              </Button>
              <Button type="submit">Confirmer</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
