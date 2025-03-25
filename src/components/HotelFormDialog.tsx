
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
  FormDescription,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Hotel } from "@/data/hotels";
import { Building, Star, MapPin, Phone, CircleDollarSign, Home, Map, BadgeCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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
  wifi: z.boolean().optional().default(true),
  parking: z.boolean().optional().default(false),
  piscine: z.boolean().optional().default(false),
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
      wifi: true,
      parking: false,
      piscine: false,
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
        wifi: editingHotel.wifi || true,
        parking: editingHotel.parking || false,
        piscine: editingHotel.piscine || false,
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
        wifi: true,
        parking: false,
        piscine: false,
      });
    }
  }, [editingHotel, form]);

  const handleSubmit = async (data: FormValues) => {
    try {
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
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 border-none shadow-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-blue-600">
            <Building className="h-6 w-6" />
            {editingHotel ? "Modifier un hôtel" : "Ajouter un nouvel hôtel"}
          </DialogTitle>
          <DialogDescription className="text-base">
            {editingHotel 
              ? "Modifiez les informations de l'hôtel existant."
              : "Remplissez le formulaire pour ajouter un nouvel hôtel partenaire."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="nom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-blue-600">
                      <Building className="h-4 w-4" />
                      Nom de l'hôtel
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Four Seasons" 
                        {...field} 
                        className="border-blue-500/30 focus-visible:ring-blue-500/50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="ville"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-purple-600">
                        <Map className="h-4 w-4" />
                        Ville
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Casablanca" 
                          {...field} 
                          className="border-purple-500/30 focus-visible:ring-purple-500/50"
                        />
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
                      <FormLabel className="flex items-center gap-2 text-yellow-600">
                        <Star className="h-4 w-4" />
                        Nombre d'étoiles (1-5)
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1" 
                          max="5" 
                          {...field} 
                          className="border-yellow-500/30 focus-visible:ring-yellow-500/50"
                        />
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
                      <FormLabel className="flex items-center gap-2 text-green-600">
                        <CircleDollarSign className="h-4 w-4" />
                        Prix par nuit
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="1500 DH" 
                          {...field} 
                          className="border-green-500/30 focus-visible:ring-green-500/50"
                        />
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
                      <FormLabel className="flex items-center gap-2 text-red-500">
                        <MapPin className="h-4 w-4" />
                        Distance du stade
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="2.5 km" 
                          {...field} 
                          className="border-red-500/30 focus-visible:ring-red-500/50"
                        />
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
                      <FormLabel className="flex items-center gap-2 text-orange-500">
                        <Home className="h-4 w-4" />
                        ID du stade associé
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="stade-marrakech" 
                          {...field} 
                          className="border-orange-500/30 focus-visible:ring-orange-500/50"
                        />
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
                      <FormLabel className="flex items-center gap-2 text-teal-600">
                        <MapPin className="h-4 w-4" />
                        Adresse
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="123 Avenue Mohammed V" 
                          {...field} 
                          className="border-teal-500/30 focus-visible:ring-teal-500/50"
                        />
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
                      <FormLabel className="flex items-center gap-2 text-indigo-500">
                        <Phone className="h-4 w-4" />
                        Téléphone
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+212 522 123 456" 
                          {...field} 
                          className="border-indigo-500/30 focus-visible:ring-indigo-500/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <FormField
                  control={form.control}
                  name="wifi"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>WiFi</FormLabel>
                        <FormDescription className="text-xs">
                          WiFi gratuit disponible
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="parking"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Parking</FormLabel>
                        <FormDescription className="text-xs">
                          Parking gratuit disponible
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="piscine"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Piscine</FormLabel>
                        <FormDescription className="text-xs">
                          Piscine disponible
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-blue-600">
                      URL de l'image
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://example.com/image.jpg" 
                        {...field} 
                        className="border-blue-500/30 focus-visible:ring-blue-500/50"
                      />
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
                    <FormLabel className="flex items-center gap-2 text-blue-600">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Décrivez l'hôtel, ses commodités et services..." 
                        className="min-h-[120px] border-blue-500/30 focus-visible:ring-blue-500/50 resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-4 mt-6 border-t border-gray-100 dark:border-gray-800">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleReset} 
                className="w-full sm:w-auto border-2 border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                Réinitialiser
              </Button>
              <Button 
                type="submit" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-md"
              >
                {editingHotel ? "Mettre à jour" : "Confirmer"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
