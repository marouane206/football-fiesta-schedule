
import React, { useEffect } from "react";
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
import { Hotel } from "@/data/hotels";

const formSchema = z.object({
  nom: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  description: z.string().min(10, { message: "La description doit contenir au moins 10 caractères" }),
  etoiles: z.coerce.number().min(1).max(5),
  image: z.string().url({ message: "L'URL de l'image n'est pas valide" }),
  prix: z.string().min(1, { message: "Le prix est requis" }),
  ville: z.string().min(2, { message: "La ville doit contenir au moins 2 caractères" }),
  distance: z.string().min(1, { message: "La distance est requise" }),
  stadeId: z.string().min(1, { message: "Le stade associé est requis" }),
  adresse: z.string().optional(),
  telephone: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface HotelFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: FormValues) => void;
  editingHotel?: Hotel | null;
}

export function HotelFormDialog({ open, onOpenChange, onSubmit, editingHotel }: HotelFormDialogProps) {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      description: "",
      etoiles: 3,
      image: "",
      prix: "",
      ville: "",
      distance: "",
      stadeId: "",
      adresse: "",
      telephone: "",
    },
  });

  // Mettre à jour le formulaire quand editingHotel change
  useEffect(() => {
    if (editingHotel) {
      form.reset({
        nom: editingHotel.nom || "",
        description: editingHotel.description || "",
        etoiles: editingHotel.etoiles || 3,
        image: editingHotel.image || "",
        prix: editingHotel.prix || "",
        ville: editingHotel.ville || "",
        distance: editingHotel.distance || "",
        stadeId: editingHotel.stadeId || "",
        adresse: editingHotel.adresse || "",
        telephone: editingHotel.telephone || "",
      });
    } else {
      form.reset({
        nom: "",
        description: "",
        etoiles: 3,
        image: "",
        prix: "",
        ville: "",
        distance: "",
        stadeId: "",
        adresse: "",
        telephone: "",
      });
    }
  }, [editingHotel, form]);

  const handleSubmit = async (data: FormValues) => {
    try {
      // Simule l'ajout d'un nouvel hôtel localement
      onSubmit(data);
      
      form.reset();
      onOpenChange(false);
      toast({
        title: editingHotel ? "Hôtel modifié" : "Hôtel ajouté",
        description: editingHotel 
          ? `L'hôtel ${data.nom} a été modifié avec succès.`
          : `L'hôtel ${data.nom} a été ajouté avec succès.`,
      });
    } catch (error) {
      console.error('Error adding hotel:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'ajout de l'hôtel. Veuillez réessayer.",
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
          <DialogTitle>{editingHotel ? "Modifier un hôtel" : "Ajouter un nouvel hôtel"}</DialogTitle>
          <DialogDescription>
            {editingHotel 
              ? "Modifiez les informations de l'hôtel existant."
              : "Remplissez le formulaire pour ajouter un nouvel hôtel partenaire."}
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
                    <FormLabel>Nom de l'hôtel</FormLabel>
                    <FormControl>
                      <Input placeholder="Four Seasons" {...field} />
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
                name="etoiles"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre d'étoiles (1-5)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="5" {...field} />
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
                    <FormLabel>Prix par nuit</FormLabel>
                    <FormControl>
                      <Input placeholder="1500 DH" {...field} />
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
                name="adresse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adresse</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Avenue Mohammed V" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone</FormLabel>
                    <FormControl>
                      <Input placeholder="+212 522 123 456" {...field} />
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
                      placeholder="Décrivez l'hôtel, ses commodités et services..." 
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
              <Button type="submit">{editingHotel ? "Mettre à jour" : "Confirmer"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
